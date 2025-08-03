/**
 * HER PLAY Content Bridge
 * This script bridges Webflow content elements with custom HTML design
 * 
 * Usage: Include this script in your Webflow embed after your HTML
 */

// Content mapping configuration
const CONTENT_MAP = {
    // Hero Section
    'book-title': 'book-title',
    'book-subtitle': 'book-subtitle',
    'hero-heading': 'hero-heading',
    'hero-description': 'hero-description',
    'author-name': 'author-name',
    'author-tagline': 'author-tagline',
    'author-ps': 'author-ps',
    
    // Images
    'book-cover-img': {
        type: 'image',
        src: 'book-cover-image',
        alt: 'book-cover-alt'
    },
    
    // Form Elements
    'email-input': {
        type: 'placeholder',
        content: 'email-placeholder'
    },
    'privacy-label': 'privacy-text',
    'cta-button': 'cta-button',
    'waitlist-form': {
        type: 'form-action',
        content: 'waitlist-url'
    },
    
    // Media Section
    'media-heading': 'media-heading',
    'media-logos-container': {
        type: 'logos',
        content: 'media-logos'
    },
    
    // About Book
    'about-book-heading': 'about-book-heading',
    'about-book-intro': 'about-book-intro',
    'about-book-p1': 'about-book-p1',
    'about-book-p2': 'about-book-p2',
    'about-book-p3': 'about-book-p3',
    'about-book-p4': 'about-book-p4',
    'about-book-p5': 'about-book-p5',
    'about-book-p6': 'about-book-p6',
    'about-book-quote': {
        type: 'html',
        content: 'about-book-quote'
    },
    'about-book-p7': 'about-book-p7',
    'about-book-p8': 'about-book-p8',
    
    // Waitlist CTA
    'waitlist-cta-heading': 'waitlist-cta-heading',
    'waitlist-cta-p1': 'waitlist-cta-p1',
    'waitlist-cta-p2': 'waitlist-cta-p2',
    'waitlist-cta-button': 'waitlist-cta-button',
    
    // About Karolina
    'about-karolina-heading': 'about-karolina-heading',
    'about-karolina-p1': 'about-karolina-p1',
    'about-karolina-p2': 'about-karolina-p2',
    'about-karolina-p3': 'about-karolina-p3',
    'about-karolina-p4': 'about-karolina-p4',
    'about-karolina-p5': 'about-karolina-p5',
    'about-karolina-p6': 'about-karolina-p6',
    'about-karolina-p7': 'about-karolina-p7',
    
    // About HerPlay
    'about-herplay-heading': 'about-herplay-heading',
    'about-herplay-p1': 'about-herplay-p1',
    'about-herplay-p2': 'about-herplay-p2',
    'about-herplay-p3': 'about-herplay-p3',
    'about-herplay-p4': 'about-herplay-p4',
    
    // Footer
    'copyright': 'copyright',
    'privacy-link': {
        type: 'link',
        text: 'privacy-link-text',
        href: 'privacy-link-url'
    },
    'terms-link': {
        type: 'link',
        text: 'terms-link-text',
        href: 'terms-link-url'
    },
    'linkedin-link': {
        type: 'href',
        content: 'linkedin-url'
    },
    'instagram-link': {
        type: 'href',
        content: 'instagram-url'
    }
};

/**
 * Get content from Webflow element
 */
function getWebflowContent(dataAttribute) {
    const element = document.querySelector(`[data-content="${dataAttribute}"]`);
    return element ? element.textContent.trim() : '';
}

/**
 * Set text content for an element
 */
function setTextContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element && content) {
        element.textContent = content;
    }
}

/**
 * Set HTML content for an element
 */
function setHTMLContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element && content) {
        // Handle quote formatting
        const formattedContent = content
            .replace(/"/g, '"')
            .replace(/"/g, '"')
            .replace(/'/g, ''')
            .replace(/'/g, ''');
        element.innerHTML = formattedContent;
    }
}

/**
 * Set image source and alt text
 */
function setImage(elementId, srcAttribute, altAttribute) {
    const element = document.getElementById(elementId);
    const src = getWebflowContent(srcAttribute);
    const alt = getWebflowContent(altAttribute);
    
    if (element && src) {
        element.src = src;
        element.alt = alt || 'Image';
    }
}

/**
 * Set placeholder text for input
 */
function setPlaceholder(elementId, contentAttribute) {
    const element = document.getElementById(elementId);
    const placeholder = getWebflowContent(contentAttribute);
    
    if (element && placeholder) {
        element.placeholder = placeholder;
    }
}

/**
 * Set form action URL
 */
function setFormAction(formId, contentAttribute) {
    const form = document.getElementById(formId);
    const action = getWebflowContent(contentAttribute);
    
    if (form && action) {
        form.action = action;
    }
}

/**
 * Set link href and text
 */
function setLink(elementId, textAttribute, hrefAttribute) {
    const element = document.getElementById(elementId);
    const text = getWebflowContent(textAttribute);
    const href = getWebflowContent(hrefAttribute);
    
    if (element) {
        if (text) element.textContent = text;
        if (href) element.href = href;
    }
}

/**
 * Set href only
 */
function setHref(elementId, contentAttribute) {
    const element = document.getElementById(elementId);
    const href = getWebflowContent(contentAttribute);
    
    if (element && href) {
        element.href = href;
    }
}

/**
 * Create media logos
 */
function createMediaLogos(containerId, contentAttribute) {
    const container = document.getElementById(containerId);
    const logosText = getWebflowContent(contentAttribute);
    
    if (container && logosText) {
        const logos = logosText.split(',').map(logo => logo.trim());
        container.innerHTML = logos.map(logo => 
            `<span class="media-logo">${logo}</span>`
        ).join('');
    }
}

/**
 * Main content loading function
 */
function loadWebflowContent() {
    // Process each mapping
    Object.entries(CONTENT_MAP).forEach(([elementId, config]) => {
        if (typeof config === 'string') {
            // Simple text content
            setTextContent(elementId, getWebflowContent(config));
        } else if (typeof config === 'object') {
            // Complex content types
            switch (config.type) {
                case 'html':
                    setHTMLContent(elementId, getWebflowContent(config.content));
                    break;
                case 'image':
                    setImage(elementId, config.src, config.alt);
                    break;
                case 'placeholder':
                    setPlaceholder(elementId, config.content);
                    break;
                case 'form-action':
                    setFormAction(elementId, config.content);
                    break;
                case 'link':
                    setLink(elementId, config.text, config.href);
                    break;
                case 'href':
                    setHref(elementId, config.content);
                    break;
                case 'logos':
                    createMediaLogos(elementId, config.content);
                    break;
            }
        }
    });
}

/**
 * Initialize content loading
 */
function initContentBridge() {
    // Load content on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadWebflowContent);
    } else {
        loadWebflowContent();
    }
    
    // Reload content after Webflow initializes
    if (window.Webflow) {
        window.Webflow.push(function() {
            loadWebflowContent();
        });
    }
}

// Start the content bridge
initContentBridge();

// Export for debugging/testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadWebflowContent,
        getWebflowContent,
        CONTENT_MAP
    };
}