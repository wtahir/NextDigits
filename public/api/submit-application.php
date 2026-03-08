<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Validate and sanitize input
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$experience = isset($_POST['experience']) ? trim($_POST['experience']) : '';
$currentRole = isset($_POST['currentRole']) ? trim($_POST['currentRole']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate email if provided
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Check for CV file
if (!isset($_FILES['cv']) || $_FILES['cv']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'CV file is required']);
    exit();
}

$cvFile = $_FILES['cv'];
$maxFileSize = 10 * 1024 * 1024; // 10MB

// Validate file size
if ($cvFile['size'] > $maxFileSize) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'File size exceeds 10MB limit']);
    exit();
}

// Validate file type
$allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
$fileType = mime_content_type($cvFile['tmp_name']);

if (!in_array($fileType, $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid file type. Please upload PDF, DOC, or DOCX']);
    exit();
}

// Prepare email
$to = 'careers@nextdigitsai.com';
$subject = 'Solicited Application - ' . ($name ?: 'Applicant');

// Build email body
$emailBody = "New solicited application received:\n\n";
if (!empty($name)) $emailBody .= "Name: $name\n";
if (!empty($email)) $emailBody .= "Email: $email\n";
if (!empty($phone)) $emailBody .= "Phone: $phone\n";
if (!empty($currentRole)) $emailBody .= "Current Role: $currentRole\n";
if (!empty($experience)) $emailBody .= "Years of Experience: $experience\n";
if (!empty($message)) $emailBody .= "\nCover Note:\n$message\n";
$emailBody .= "\n---\nSubmitted from NextDigits AI Careers Portal\n";

// Read file content
$cvContent = file_get_contents($cvFile['tmp_name']);
$cvBase64 = base64_encode($cvContent);
$cvFileName = basename($cvFile['name']);

// Create boundary for multipart email
$boundary = md5(time());

// Set headers
$headers = "From: noreply@nextdigitsai.com\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: $email\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// Build email message
$emailMessage = "--$boundary\r\n";
$emailMessage .= "Content-Type: text/plain; charset=UTF-8\r\n";
$emailMessage .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$emailMessage .= $emailBody . "\r\n\r\n";

// Add attachment
$emailMessage .= "--$boundary\r\n";
$emailMessage .= "Content-Type: {$fileType}; name=\"$cvFileName\"\r\n";
$emailMessage .= "Content-Transfer-Encoding: base64\r\n";
$emailMessage .= "Content-Disposition: attachment; filename=\"$cvFileName\"\r\n\r\n";
$emailMessage .= chunk_split($cvBase64) . "\r\n";
$emailMessage .= "--$boundary--";

// Send email
$mailSent = mail($to, $subject, $emailMessage, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully! We will review your CV and get back to you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again or contact us directly at careers@nextdigitsai.com'
    ]);
}
?>
