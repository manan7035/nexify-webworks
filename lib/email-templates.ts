/**
 * Email Templates for Nexify Webworks Contact Form
 * These templates are used to send confirmation emails to both users and admins
 */

export interface EmailTemplateData {
  name: string;
  email: string;
  message: string;
  scopes: string[];
  aiReply?: string;
}

/**
 * Generate HTML email for user confirmation
 */
export function generateUserConfirmationEmail(data: EmailTemplateData): string {
  const scopesList = data.scopes && data.scopes.length > 0
    ? data.scopes.map(scope => `<li style="margin-bottom: 8px;">✓ ${scope}</li>`).join('')
    : '<li style="margin-bottom: 8px;">Not specified</li>';

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            border-bottom: 3px solid #4f46e5;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #0f172a;
            margin: 0;
        }
        .logo-accent {
            color: #4f46e5;
        }
        h1 {
            font-size: 20px;
            color: #0f172a;
            margin: 20px 0 10px 0;
        }
        .content {
            margin: 20px 0;
        }
        .section {
            margin: 25px 0;
            padding: 20px;
            background-color: #f9fafb;
            border-radius: 6px;
            border-left: 4px solid #4f46e5;
        }
        .section-title {
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 10px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .scopes-list {
            list-style: none;
            padding: 0;
            margin: 10px 0;
        }
        .scopes-list li {
            color: #4f46e5;
            font-weight: 500;
        }
        .ai-response {
            background-color: #eef2ff;
            border-left-color: #818cf8;
            font-style: italic;
            color: #312e81;
            line-height: 1.7;
        }
        .footer-section {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 13px;
            color: #6b7280;
        }
        .footer-section strong {
            color: #0f172a;
        }
        .cta-button {
            display: inline-block;
            padding: 12px 28px;
            background-color: #4f46e5;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 15px 0;
            font-size: 14px;
        }
        .cta-button:hover {
            background-color: #4338ca;
        }
        .contact-info {
            background-color: #fff7ed;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #f97316;
            margin: 15px 0;
            font-size: 13px;
        }
        .contact-info strong {
            color: #0f172a;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <p class="logo">NEXIFY <span class="logo-accent">WEBWORKS</span></p>
        </div>

        <!-- Main Content -->
        <h1>Your Inquiry Has Been Received ✓</h1>
        <p>Hello <strong>${escapeHtml(data.name)}</strong>,</p>
        
        <div class="content">
            <p>Thank you for reaching out to Nexify Webworks! I've successfully received your project inquiry and will review it shortly.</p>

            <!-- Project Details -->
            <div class="section">
                <div class="section-title">📋 Your Project Details</div>
                <p><strong>Name/Organization:</strong> ${escapeHtml(data.name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
                <div>
                    <strong>Requested Services:</strong>
                    <ul class="scopes-list">
                        ${scopesList}
                    </ul>
                </div>
                <p><strong>Your Message:</strong></p>
                <p style="color: #4b5563; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
            </div>

            <!-- Initial AI Assessment -->
            ${data.aiReply ? `
            <div class="section ai-response">
                <div class="section-title">🤖 Initial Assessment</div>
                <p>${escapeHtml(data.aiReply)}</p>
            </div>
            ` : ''}

            <!-- Next Steps -->
            <div class="section">
                <div class="section-title">⏱️ What Happens Next?</div>
                <ol style="margin: 10px 0; padding-left: 20px; color: #4b5563;">
                    <li style="margin-bottom: 8px;"><strong>Review:</strong> I'll review your project details and requirements.</li>
                    <li style="margin-bottom: 8px;"><strong>Assessment:</strong> I'll assess the scope and timeline.</li>
                    <li style="margin-bottom: 8px;"><strong>Response:</strong> You'll receive a detailed response within <strong>4 business hours</strong>.</li>
                </ol>
            </div>

            <!-- Contact Information -->
            <div class="contact-info">
                <strong>💡 Tip:</strong> Need to reach me faster? Feel free to reply to this email or contact me directly at 
                <a href="mailto:info@nexifywebworks.in" style="color: #f97316; text-decoration: none;">info@nexifywebworks.in</a>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer-section">
            <p><strong>Nexify Webworks</strong><br>
            India-based Freelance Web Developer<br>
            Rajkot, India 🇮🇳</p>
            <p style="margin-top: 15px; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Nexify Webworks. All rights reserved.<br>
                This email was sent because you submitted a contact form on our website.
            </p>
        </div>
    </div>
</body>
</html>
  `;
}

/**
 * Generate HTML email for admin notification
 */
export function generateAdminNotificationEmail(data: EmailTemplateData): string {
  const scopesList = data.scopes && data.scopes.length > 0
    ? data.scopes.map(scope => `<li style="margin-bottom: 6px;">• ${scope}</li>`).join('')
    : '<li style="margin-bottom: 6px;">Not specified</li>';

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .alert {
            background-color: #fef3c7;
            border-left: 4px solid #fbbf24;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-weight: 500;
            color: #92400e;
        }
        h1 {
            color: #0f172a;
            margin: 0 0 20px 0;
            font-size: 22px;
        }
        h2 {
            font-size: 14px;
            color: #0f172a;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin: 20px 0 12px 0;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 8px;
        }
        .info-block {
            background-color: #f9fafb;
            padding: 15px;
            border-radius: 6px;
            margin: 12px 0;
            border-left: 3px solid #4f46e5;
        }
        .info-block p {
            margin: 8px 0;
            font-size: 14px;
        }
        .info-label {
            font-weight: 600;
            color: #0f172a;
            display: inline-block;
            min-width: 140px;
        }
        .scopes-list {
            list-style: none;
            padding: 0;
            margin: 10px 0;
        }
        .scopes-list li {
            padding: 4px 0;
            color: #4f46e5;
            font-weight: 500;
            font-size: 13px;
        }
        .message-box {
            background-color: #f3f4f6;
            padding: 15px;
            border-radius: 6px;
            margin: 12px 0;
            border: 1px solid #d1d5db;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            color: #1f2937;
        }
        .ai-assessment {
            background-color: #f0fdf4;
            border-left: 3px solid #16a34a;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            font-size: 13px;
        }
        .ai-assessment strong {
            color: #15803d;
        }
        .action-links {
            margin: 20px 0;
            display: flex;
            gap: 10px;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 13px;
        }
        .btn-reply {
            background-color: #4f46e5;
            color: white;
        }
        .btn-reply:hover {
            background-color: #4338ca;
        }
        .footer-section {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔔 New Contact Form Submission</h1>

        <div class="alert">
            ⏱️ New inquiry received - Review and respond within 4 business hours
        </div>

        <!-- Client Information -->
        <h2>📋 Client Information</h2>
        <div class="info-block">
            <p><span class="info-label">Name/Org:</span> <strong>${escapeHtml(data.name)}</strong></p>
            <p><span class="info-label">Email:</span> <strong><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></strong></p>
        </div>

        <!-- Project Scope -->
        <h2>🎯 Requested Services</h2>
        <div class="info-block">
            <ul class="scopes-list">
                ${scopesList}
            </ul>
        </div>

        <!-- Project Message -->
        <h2>💬 Project Message</h2>
        <div class="message-box">${escapeHtml(data.message)}</div>

        <!-- AI Assessment -->
        ${data.aiReply ? `
        <h2>🤖 AI Initial Assessment</h2>
        <div class="ai-assessment">
            <strong>Gemini Analysis:</strong>
            <p style="margin-top: 10px;">${escapeHtml(data.aiReply)}</p>
        </div>
        ` : ''}

        <!-- Action Links -->
        <div class="action-links">
            <a href="mailto:${escapeHtml(data.email)}" class="btn btn-reply">📧 Reply to Client</a>
        </div>

        <!-- Footer -->
        <div class="footer-section">
            <p><strong>Nexify Webworks Admin Panel</strong></p>
            <p>This is an automated notification from your contact form. Review the details above and respond to the client promptly.</p>
            <p style="margin-top: 10px; color: #9ca3af;">Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
    </div>
</body>
</html>
  `;
}

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Generate plain text version of user confirmation
 */
export function generateUserConfirmationPlainText(data: EmailTemplateData): string {
  const scopes = data.scopes && data.scopes.length > 0
    ? data.scopes.map(s => `  • ${s}`).join('\n')
    : '  • Not specified';

  return `
Your Inquiry Has Been Received

Hello ${data.name},

Thank you for reaching out to Nexify Webworks! I've successfully received your project inquiry and will review it shortly.

---
YOUR PROJECT DETAILS
---
Name/Organization: ${data.name}
Email: ${data.email}

Requested Services:
${scopes}

Your Message:
${data.message}

${data.aiReply ? `---
INITIAL ASSESSMENT
---
${data.aiReply}

` : ''}---
WHAT HAPPENS NEXT?
---
1. Review: I'll review your project details and requirements.
2. Assessment: I'll assess the scope and timeline.
3. Response: You'll receive a detailed response within 4 business hours.

---
Need to reach me faster?
---
Feel free to reply to this email or contact me directly at:
info@nexifywebworks.in

© ${new Date().getFullYear()} Nexify Webworks
Rajkot, India 🇮🇳
India-based Freelance Web Developer
  `;
}

/**
 * Generate plain text version of admin notification
 */
export function generateAdminNotificationPlainText(data: EmailTemplateData): string {
  const scopes = data.scopes && data.scopes.length > 0
    ? data.scopes.map(s => `  • ${s}`).join('\n')
    : '  • Not specified';

  return `
NEW CONTACT FORM SUBMISSION

CLIENT INFORMATION
---
Name/Organization: ${data.name}
Email: ${data.email}

REQUESTED SERVICES
---
${scopes}

PROJECT MESSAGE
---
${data.message}

${data.aiReply ? `AI INITIAL ASSESSMENT
---
${data.aiReply}

` : ''}ACTION REQUIRED
---
Review this inquiry and respond to the client within 4 business hours.
Reply to: ${data.email}

---
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
Nexify Webworks Admin Notification
  `;
}
