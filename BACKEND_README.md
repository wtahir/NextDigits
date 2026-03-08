# CV Submission Backend - Quick Start

## What Was Implemented

Your NextDigits website now has a fully functional backend for CV submissions. When users submit an application through the Careers dialog, the CV is automatically emailed to `careers@nextdigitsai.com`.

## Files Created/Modified

### New Files:
1. **`public/api/submit-application.php`** - Backend endpoint that processes CV uploads and sends emails
2. **`public/.htaccess`** - Apache configuration for proper routing and PHP settings
3. **`DEPLOYMENT_GUIDE.md`** - Detailed deployment instructions

### Modified Files:
1. **`src/components/CareersDialog.tsx`** - Updated to send CV to backend instead of opening email client

## How It Works

1. User fills out the careers application form
2. User uploads their CV (PDF, DOC, or DOCX)
3. User clicks "Submit Application"
4. Frontend sends the data to `/api/submit-application.php`
5. PHP backend validates the file and data
6. PHP sends an email with the CV attached to `careers@nextdigitsai.com`
7. User sees success/error message

## To Deploy to Hostinger

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Hostinger:**
   - Upload everything from the `dist` folder to your `public_html` directory
   - The `api` folder and `.htaccess` will be automatically included

3. **Test:**
   - Visit your website
   - Go to Careers section
   - Submit a test application
   - Check the email at `careers@nextdigitsai.com`

## Features

✅ File upload with validation (PDF, DOC, DOCX only)
✅ 10MB file size limit
✅ Email validation
✅ Form data sanitization
✅ Loading states and error handling
✅ Success/error notifications
✅ Professional email formatting
✅ CORS support
✅ Hostinger-compatible PHP code

## Security

- File type validation
- File size limits
- Input sanitization
- Email validation
- Error handling
- No sensitive data in frontend

## Troubleshooting

If emails aren't being received:
1. Check spam folder
2. Verify PHP `mail()` function is enabled on your Hostinger account
3. Check error logs in Hostinger hPanel
4. Contact Hostinger support if needed

See `DEPLOYMENT_GUIDE.md` for detailed troubleshooting steps.

## Testing Locally (Optional)

To test locally, you'll need PHP installed:

```bash
# In the public folder
php -S localhost:3000

# Then update the fetch URL in CareersDialog.tsx temporarily:
// Change: '/api/submit-application.php'
// To: 'http://localhost:3000/api/submit-application.php'
```

## Need Help?

Refer to the detailed `DEPLOYMENT_GUIDE.md` for:
- Step-by-step deployment instructions
- Troubleshooting common issues
- Alternative email solutions
- Security enhancements
- Testing checklist
