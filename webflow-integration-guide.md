# Webflow Content Management Integration Guide

## Best Approach: Hybrid Solution

Combine Webflow's content management with your custom HTML/CSS design:

### 1. **Content in Webflow, Design in Custom Code**

**Setup in Webflow:**
1. Create a CMS Collection called "Book Content"
2. Add fields:
   - Book Title (Text)
   - Book Subtitle (Text)
   - Hero Description (Text)
   - Author Bio (Text)
   - Book Cover (Image)
   - About Book (Rich Text)
   - About Author (Rich Text)
   - About HerPlay (Rich Text)

**Implementation:**
```html
<!-- Your embed element contains the design -->
<div class="custom-hero">
    <!-- Content populated from CMS -->
</div>
```

### 2. **Using Webflow's Collection Lists**

Create your glassmorphic design around Webflow's collection items:

```css
/* Apply to Webflow's collection items */
.w-dyn-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
}
```

### 3. **JavaScript Bridge Method** (Recommended)

**Step 1:** Add text blocks in Webflow that Karolina can edit:
- Add a Section
- Add Text Blocks with specific IDs
- Set them to display: none

**Step 2:** Your embedded code reads these values:
```javascript
// Your custom code pulls content from Webflow elements
const title = document.querySelector('[data-content="book-title"]').innerText;
document.getElementById('hero-title').innerText = title;
```

### 4. **Webflow Attributes Method**

Use Webflow's custom attributes to pass data:

```html
<!-- In Webflow -->
<div data-book-title="HER PLAY" 
     data-book-author="Karolina Pelc"
     data-launch-date="Coming Soon">
</div>

<!-- In your custom code -->
<script>
const bookData = document.querySelector('[data-book-title]').dataset;
// Use bookData.bookTitle, bookData.bookAuthor, etc.
</script>
```

## Implementation Steps

### For Karolina's Easy Editing:

1. **Create Webflow Structure:**
   ```
   Page
   ├── Content Section (Hidden)
   │   ├── Text: Book Title
   │   ├── Text: Book Subtitle  
   │   ├── Rich Text: About Book
   │   └── Image: Book Cover
   └── Embed: Your Custom HTML/CSS
   ```

2. **Add Classes:**
   - `.content-source` - for hidden content
   - `.editable-text` - for text she can change
   - `.dynamic-image` - for images

3. **Simple Dashboard:**
   Create a "Content Manager" page where all editable elements are visible in one place

### Benefits:
- ✅ Karolina can edit content without touching code
- ✅ Your advanced design remains intact
- ✅ SEO benefits from Webflow CMS
- ✅ Version control through Webflow backups
- ✅ Can preview changes before publishing

### Example Setup:

```html
<!-- WEBFLOW EDITOR VIEW -->
<div class="content-manager">
    <h3>Edit Your Content Below:</h3>
    
    <div class="edit-section">
        <label>Book Title:</label>
        <div class="editable" data-content="title">HER PLAY</div>
    </div>
    
    <div class="edit-section">
        <label>Hero Description:</label>
        <div class="editable" data-content="hero-desc">
            Join the waitlist for exclusive updates!
        </div>
    </div>
</div>

<!-- YOUR CUSTOM DESIGN (in embed) -->
<div class="glassmorphic-hero">
    <h1 class="dynamic-title"></h1>
    <p class="dynamic-desc"></p>
</div>
```

## Quick Start Template

1. **In Webflow Page:**
   - Add a Section with class `content-data`
   - Add Text Blocks for each piece of content
   - Give each a unique ID
   - Set the section to `display: none`

2. **In Your Embed:**
   - Paste the `index-content-dynamic.html` code
   - The JavaScript automatically pulls content

3. **For Updates:**
   - Karolina edits the text blocks in Webflow Designer
   - Publishes the site
   - Content updates instantly

This way, you get the best of both worlds:
- Your sophisticated glassmorphic/parallax design
- Webflow's easy content management
- No need to touch code for content updates