# Webflow Setup Guide - HER PLAY Marketing Page

## Overview
This guide shows you how to set up the HER PLAY marketing page in Webflow using the JavaScript Bridge Method. This approach allows Karolina to edit all content through Webflow's visual editor while maintaining the sophisticated glassmorphic and parallax design.

## Files You'll Need
1. `webflow-content-template.html` - The hidden content blocks
2. `index-bridge.html` - The main design with placeholders
3. `content-bridge.js` - The JavaScript that connects them (optional - already included in index-bridge.html)

## Step 1: Create the Webflow Page

1. **Create a new blank page in Webflow**
   - Name it "Book Landing" or similar
   - Don't use any templates

2. **Add a Section**
   - Drag a Section element onto the page
   - Give it an ID: `content-source`
   - Set Display to `none` in the Style panel

## Step 2: Add Content Blocks

Copy the content from `webflow-content-template.html` and recreate it in Webflow:

1. **Inside the hidden section, add Text Blocks for each piece of content**
   - For each `<div>` in the template, add a Text Block
   - Add the custom attribute: `data-content` = `[value from template]`
   - Paste the content into each text block

### Example:
```
Text Block 1:
- Custom Attribute: data-content = "book-title"
- Content: "HER PLAY"

Text Block 2:
- Custom Attribute: data-content = "book-subtitle"
- Content: "A Book by Karolina Pelc"
```

### Pro Tip: Organize with Div Blocks
Group related content:
```
Div Block: "Hero Content"
├── Text: book-title
├── Text: book-subtitle
├── Text: hero-heading
└── Text: hero-description

Div Block: "About Book Content"
├── Text: about-book-heading
├── Text: about-book-intro
├── Text: about-book-p1
└── ... (etc)
```

## Step 3: Add the Custom HTML

1. **Add an Embed element**
   - Drag an Embed element below your hidden section
   - Double-click to open the code editor

2. **Paste the index-bridge.html code**
   - Copy ALL content from `index-bridge.html`
   - Paste into the embed element
   - Click "Save & Close"

## Step 4: Upload the Book Cover

1. **Go to Assets panel**
2. **Upload `cover_image.png`**
3. **Copy the URL** (click the image, copy the URL)
4. **Update the content block**:
   - Find the text block with `data-content="book-cover-image"`
   - Replace `cover_image.png` with the full Webflow URL

## Step 5: Configure Forms

### Option A: Use Webflow Forms (Recommended)
1. **In the hidden section**, update the text block:
   - `data-content="waitlist-url"` 
   - Set to: `#` (Webflow will handle it)

2. **In Project Settings > Forms**:
   - Set up email notifications
   - Configure form submissions

### Option B: External Service (ConvertKit/Mailchimp)
1. **Get your form endpoint URL** from your email service
2. **Update the content block**:
   - `data-content="waitlist-url"`
   - Set to your service's URL

## Step 6: Test Everything

1. **Publish to staging**
2. **Check all content loads**
3. **Test the form submission**
4. **Verify mobile responsiveness**

## Content Editing Guide for Karolina

### To Edit Text:
1. **Go to the Designer**
2. **Find the hidden section** (you might need to temporarily show it)
3. **Click on any text block**
4. **Edit the content**
5. **Publish** - changes appear instantly!

### Quick Reference - What Each Block Controls:

| Content Block | What It Controls |
|--------------|------------------|
| book-title | Main "HER PLAY" title |
| book-subtitle | "A Book by Karolina Pelc" |
| hero-description | Waitlist signup description |
| cta-button | Button text ("Join the Waitlist") |
| about-book-intro | Opening question about Warsaw |
| media-logos | List of media outlets (comma-separated) |

### To Update Media Logos:
Edit the `media-logos` text block with comma-separated values:
```
TechCrunch,ABC News,Forbes,Yahoo! News,SBC,Next.io
```

### To Change Social Links:
1. Find `linkedin-url` text block
2. Update with new URL
3. Same for `instagram-url`

### To Update the Book Cover:
1. Upload new image to Assets
2. Copy the URL
3. Update `book-cover-image` text block

## Troubleshooting

### Content Not Showing?
1. **Check custom attributes** - Must be exactly `data-content="name"`
2. **Check for typos** in attribute values
3. **Ensure hidden section** has ID `content-source`

### Form Not Working?
1. **For Webflow forms**: Ensure form method is POST
2. **Check spam filters** in form settings
3. **Test in published site** (not preview)

### Styling Issues?
1. **Character limit?** The full version might exceed limits
2. **Use minified version** if needed
3. **Split into multiple embeds** if necessary

## Advanced Tips

### Custom Fonts
Add to the embed's `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

Then update the CSS font-family.

### Analytics
Add tracking codes to Project Settings > Custom Code

### Performance
1. Optimize images before uploading
2. Use Webflow's built-in image optimization
3. Enable lazy loading for images

## Support

If you need to:
- **Add new sections**: Add new content blocks with unique `data-content` attributes
- **Change design**: Edit the CSS in the embed element
- **Add animations**: Modify the JavaScript in the embed

Remember: The beauty of this system is that Karolina can update any text content without touching code!