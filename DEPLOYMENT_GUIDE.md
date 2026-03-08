# Backend Deployment Guide for Hostinger

This guide explains how to deploy the NextDigits website with CV submission functionality to Hostinger.

## Overview

The application now includes a PHP backend that handles CV submissions and sends them via email to `careers@nextdigitsai.com`.

## Files Added

1. **`public/api/submit-application.php`** - PHP endpoint that handles CV uploads and email sending
2. **`public/.htaccess`** - Apache configuration for routing and PHP settings

## Prerequisites

- Hostinger hosting account with PHP support (7.4 or higher recommended)
- FTP/SSH access to your Hostinger account
- Domain configured on Hostinger

## Deployment Steps

### 1. Build Your React Application

```bash
cd /home/waqas/Documents/projects/NextDigits
npm run build
# or if using bun:
bun run build
```

This creates a `dist` folder with your production-ready files.

### 2. Upload Files to Hostinger

#### Option A: Using Hostinger File Manager
1. Log in to your Hostinger control panel (hPanel)
2. Navigate to **Files → File Manager**
3. Go to the `public_html` directory (or your domain's root directory)
4. Upload all files from the `dist` folder
5. Make sure the folder structure is:
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── assets/
   ├── api/
   │   └── submit-application.php
   └── ... (other files)
   ```

#### Option B: Using FTP (FileZilla, etc.)
1. Connect to your Hostinger account via FTP
2. Navigate to `public_html`
3. Upload all contents from the `dist` folder

### 3. Verify PHP Configuration

The `.htaccess` file is configured with these PHP settings:
- `upload_max_filesize`: 10MB
- `post_max_size`: 11MB
- `memory_limit`: 128MB
- `max_execution_time`: 300 seconds

If these settings don't work on your hosting plan, you may need to:
1. Check your Hostinger plan limits
2. Contact Hostinger support to increase PHP limits
3. Or modify the values in `.htaccess` to match your plan limits

### 4. Configure Email Settings

By default, the PHP script uses Hostinger's built-in `mail()` function. For better deliverability:

1. **Option A: Use Hostinger's Email Service**
   - Create an email account: `noreply@nextdigitsai.com` in hPanel
   - The script is already configured to use this as the sender

2. **Option B: Use SMTP (More Reliable)**
   If you want better email deliverability, you can modify `submit-application.php` to use SMTP with PHPMailer:
   ```php
   // Install PHPMailer via Composer or include manually
   // Configure SMTP settings for your email provider
   ```

### 5. Test the Application

1. Visit your website: `https://yourdomai n.com`
2. Click on the Careers section
3. Fill out the application form
4. Upload a test CV (PDF, DOC, or DOCX)
5. Click "Submit Application"
6. Check the inbox at `careers@nextdigitsai.com`

### 6. Troubleshooting

#### Emails Not Being Received

1. **Check Spam Folder**: Emails might be filtered as spam
2. **Verify PHP mail() Function**: Some hosting plans disable `mail()` by default
   - Contact Hostinger support to enable it
3. **Check Error Logs**: 
   - In hPanel, go to **Advanced → Error Log**
   - Look for PHP errors related to email sending
4. **Test Email Functionality**: Create a simple test script:
   ```php
   <?php
   $result = mail('your@email.com', 'Test', 'Test message');
   echo $result ? 'Success' : 'Failed';
   ?>
   ```

#### File Upload Issues

1. **Check File Permissions**: Ensure the `tmp` directory is writable
2. **Verify Upload Limits**: Check if your hosting plan allows 10MB uploads
3. **Check `.htaccess`**: Ensure it's been uploaded and is active

#### CORS Errors

If you see CORS errors in the browser console:
1. Verify `.htaccess` is in the correct location
2. Check that `mod_headers` is enabled (usually is on Hostinger)
3. Contact Hostinger support if issues persist

#### 404 Errors on API Endpoint

1. Verify the file path: `public_html/api/submit-application.php`
2. Check `.htaccess` is uploaded
3. Ensure URL is correct: `https://yourdomain.com/api/submit-application.php`

### 7. Security Considerations

The current implementation includes basic security:
- File type validation (PDF, DOC, DOCX only)
- File size limit (10MB)
- Email validation
- Input sanitization

For production, consider:
- Adding rate limiting to prevent spam
- Implementing CAPTCHA (Google reCAPTCHA)
- Setting up proper error logging
- Using environment variables for sensitive data

### 8. Alternative: Using Hostinger Contact Form

If email sending doesn't work well, Hostinger offers a built-in contact form feature:
1. In hPanel, look for **Email → Contact Forms**
2. You can integrate this with your website
3. Or use a third-party service like FormSpree, SendGrid, etc.

## File Structure After Deployment

```
public_html/
├── .htaccess                          # Apache configuration
├── index.html                          # React app entry point
├── robots.txt
├── assets/                             # React build assets
│   ├── index-[hash].css
│   └── index-[hash].js
└── api/
    └── submit-application.php          # CV submission backend
```

## Support

If you encounter issues:
1. Check Hostinger's documentation: https://support.hostinger.com
2. Contact Hostinger support for server-specific issues
3. Review PHP error logs in your hPanel

## Environment Variables (Optional)

For enhanced security, you can store the recipient email in a config file:

Create `public/api/config.php`:
```php
<?php
define('CAREERS_EMAIL', 'careers@nextdigitsai.com');
?>
```

Then in `submit-application.php`, replace:
```php
$to = 'careers@nextdigitsai.com';
```
with:
```php
require_once 'config.php';
$to = CAREERS_EMAIL;
```

## Testing Checklist

- [ ] Website loads correctly at your domain
- [ ] Careers dialog opens when clicking "Careers"
- [ ] File upload accepts PDF, DOC, DOCX files
- [ ] File upload rejects files over 10MB
- [ ] Form submission shows success message
- [ ] Email arrives at careers@nextdigitsai.com with CV attached
- [ ] All form fields are included in the email
- [ ] CV attachment opens correctly

---

**Last Updated**: March 8, 2026
**Version**: 1.0
