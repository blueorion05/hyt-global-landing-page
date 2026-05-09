# HYT Global Institute Landing Page - Testing Checklist

**Project:** HYT Global Institute Landing Page  
**Date:** May 6, 2026  
**Version:** 1.0  
**Testing Type:** Software Acceptance Testing (SAT) | User Acceptance Testing (UAT)

---

## A. WEBSITE CORE FUNCTIONALITY

### Navigation & Layout
- [ ] Navbar displays correctly on all screen sizes (mobile, tablet, desktop)
- [ ] Logo appears/hides based on navbar background color
- [ ] Navigation links scroll to correct sections smoothly
- [ ] Mobile menu toggle opens and closes properly
- [ ] All navigation links are clickable and functional
- [ ] No broken links or missing pages
- [ ] Responsive design works on all breakpoints (mobile, sm, md, lg)

### Hero Section
- [ ] Hero section loads without errors
- [ ] Background image displays correctly
- [ ] TESDA badge displays properly
- [ ] Main heading text is readable and responsive
- [ ] CTA buttons ("Explore Courses", "Apply Now") are functional
- [ ] Buttons navigate to correct sections
- [ ] Statistics (20+, 95%, 10+) display correctly
- [ ] HYT logo displays on desktop view
- [ ] Section is hidden properly on mobile when appropriate

---

## B. COURSES SECTION

### Course Cards Display
- [ ] All 8 courses display in correct grid layout
- [ ] Course images load without errors
- [ ] Course titles and descriptions are visible
- [ ] Category badges display with correct colors
- [ ] "View Details" button is clickable
- [ ] Card spacing and sizing is consistent across all cards

### Course Flip Card Feature
- [ ] Clicking "View Details" flips card smoothly
- [ ] Front side shows course overview correctly
- [ ] Back side displays all course details (Overview, What You'll Learn, Duration, Requirements, Career Path)
- [ ] "Inquire Now" button on back side is functional
- [ ] "Back" button flips card back to front side
- [ ] Multiple cards can be flipped independently
- [ ] Flip animation works smoothly (0.6s transition)
- [ ] Card padding at bottom is adequate (no content cutoff)

### "Inquire Now" Functionality
- [ ] Clicking "Inquire Now" scrolls to Contact section
- [ ] Clicked card automatically returns to front view
- [ ] Contact form is ready for user input after navigation

---

## C. CONTACT SECTION

### Contact Information Display
- [ ] Email section displays 3 clickable email addresses
- [ ] Emails are on separate lines (not comma-separated)
- [ ] Each email link opens default email client (mailto: working)
- [ ] Phone number displays correctly
- [ ] Address displays with full details
- [ ] Office hours show correct times
- [ ] Contact icons display properly with correct colors

### Contact Form
- [ ] Name field accepts input correctly
- [ ] Email field validates email format
- [ ] Message field accepts multi-line text
- [ ] Form validation prevents submission with empty fields
- [ ] Submit button is clickable and functional

### Form Submission & Feedback
- [ ] Loading spinner appears during submission
- [ ] Success modal displays after successful submission
- [ ] Error modal displays on submission failure
- [ ] Success message displays correct text
- [ ] Confirmation modal has close button
- [ ] Form clears after successful submission
- [ ] Modal closes properly when user clicks close button

### Google Maps Embed
- [ ] Map loads without errors
- [ ] Correct location (55 Natividad, QC) is displayed
- [ ] Map is interactive and responsive

---

## D. COURSES DETAILED INFORMATION

### Course Data Completeness
- [ ] Food & Beverage Services - All details correct
- [ ] Front Office Services - All details correct
- [ ] Housekeeping Services - All details correct
- [ ] Events Management - All details correct
- [ ] Caregiving - All details correct
- [ ] Hilot (Wellness Massage) - All details correct
- [ ] IT & Cybersecurity - All details correct
- [ ] Bookkeeping & Accounting - All details correct

### Course Details Display
- [ ] Course overview text is readable
- [ ] "What You'll Learn" section shows 7-8 bullet points
- [ ] Duration displays correctly
- [ ] Requirements displays correctly
- [ ] Career path information is relevant and complete

---

## E. PARTNERS SECTION

### Partner Logos Display
- [ ] HYT Foundation Inc. logo displays
- [ ] BRAINS logo displays
- [ ] KGC logo displays
- [ ] Klassic logo displays
- [ ] LevelUp logo displays
- [ ] LUX logo displays
- [ ] WDC logo displays
- [ ] ZCorp logo displays

### Marquee Animation
- [ ] Partner logos scroll from right to left continuously
- [ ] Animation speed is consistent (30s cycle)
- [ ] Animation loops seamlessly without gaps
- [ ] Animation pauses/resumes appropriately
- [ ] All logos are visible in the scrolling sequence
- [ ] Animation works smoothly on all screen sizes

### HYT Foundation Section
- [ ] HYT Foundation information card displays
- [ ] Company description text displays correctly
- [ ] Card styling is responsive on all devices
- [ ] Card padding is adequate on mobile

---

## F. FACILITIES SECTION

### Building Image Gallery
- [ ] Facilities section loads without errors
- [ ] Building images display with high quality (no pixelation)
- [ ] Image gallery shows correct structure (5 floor sections)
- [ ] Floor names display below images: Ground Floor, 2nd Floor, Tech Room, 3rd Floor, Roof Deck

### Image Navigation
- [ ] Previous/Next buttons navigate correctly
- [ ] Navigation works within floor images first
- [ ] Navigation advances to next floor when all images are viewed
- [ ] Floor label updates appropriately
- [ ] Navigation arrows are visible and responsive
- [ ] Auto-rotation cycles through images every 3.5 seconds
- [ ] Auto-rotation stops during user interaction

### Image Quality
- [ ] Images render crisp without blurriness
- [ ] Images don't appear pixelated
- [ ] Image rendering uses CSS optimization (.high-quality-image class)
- [ ] Images maintain aspect ratio correctly

---

## G. WHY HYT SECTION

### Feature Cards Display
- [ ] All 6 feature cards display in 3-column grid (responsive)
- [ ] Cards stack properly on mobile/tablet (2 columns, then 1)

### Feature Card Content
- [ ] Industry & TESDA-Certified Instructors - Icon & description visible
- [ ] Fully Equipped Institution - Icon & description visible
- [ ] Overseas Employment Partnerships - Icon & description visible
- [ ] Track Record of Success - Icon & description visible
- [ ] Workforce & Entrepreneurial Readiness - Icon & description visible
- [ ] Strong Global Network - Icon & description visible

### Icons Display
- [ ] All 6 icons display correctly (graduation, building, globe, trophy, briefcase, handshake)
- [ ] Icons are amber colored
- [ ] Icons maintain proper size (w-12 h-12)
- [ ] No SVG rendering warnings in console
- [ ] Icons are properly aligned within cards

---

## H. ADMISSIONS SECTION

### Admission Process Display
- [ ] 3-step horizontal layout displays correctly
- [ ] Steps are numbered (01, 02, 03)
- [ ] Step titles display: "Submit Your Application", "Prepare Required Documents", "Attend an Interview"
- [ ] Step descriptions are complete and accurate
- [ ] Arrow indicators between steps display correctly
- [ ] Left border accent on cards displays in blue

### Responsive Layout
- [ ] Desktop: 3 steps side-by-side with arrows
- [ ] Tablet: Layout adjusts appropriately
- [ ] Mobile: Steps stack vertically in proper order
- [ ] Card spacing is consistent on all devices

---

## I. MISSION/ABOUT SECTION

### Section Content
- [ ] Vision statement displays correctly
- [ ] Mission statement and 4 pillars display
- [ ] All text is readable and properly formatted
- [ ] Section heading is responsive across devices

---

## J. GENERAL FUNCTIONALITY

### Page Load & Performance
- [ ] Website loads completely within 3 seconds
- [ ] No broken images or missing assets
- [ ] No console errors (only warnings if any)
- [ ] Page transitions are smooth without lag
- [ ] Scrolling performance is smooth (60fps)

### Responsive Design
- [ ] Mobile (320px - 640px): All sections responsive
- [ ] Tablet (641px - 1024px): All sections properly laid out
- [ ] Desktop (1025px+): Full layout displays correctly
- [ ] No horizontal scrolling on any device
- [ ] Text is readable on all screen sizes
- [ ] Images scale appropriately on all sizes
- [ ] Buttons are touch-friendly on mobile (min 44x44px)

### Accessibility
- [ ] All images have alt text
- [ ] Links are understandable and descriptive
- [ ] Color contrast meets WCAG standards
- [ ] Form labels are associated with inputs
- [ ] Navigation is keyboard accessible

### Browser Compatibility
- [ ] Works on Chrome/Chromium
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Works on Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Form Handling
- [ ] Form fields accept user input
- [ ] Form validation prevents invalid submissions
- [ ] No data loss during form submission
- [ ] Email delivery works correctly
- [ ] Autoreply emails are sent to users
- [ ] Admin notifications are received

---

## K. SECURITY & DATA HANDLING

### Environment Variables
- [ ] Firebase keys are stored in .env (not in source code)
- [ ] EmailJS keys are stored in .env (not in source code)
- [ ] .env file is excluded from git (.gitignore)
- [ ] .env.example provides proper template
- [ ] No sensitive keys exposed in console

### Data Privacy
- [ ] Contact form data is handled securely
- [ ] User emails are not logged publicly
- [ ] Form submissions use HTTPS (in production)
- [ ] No personal data is stored unnecessarily

---

## L. ICONS & VISUAL ELEMENTS

### SVG Icon Rendering
- [ ] GraduationIcon renders without errors
- [ ] BuildingIcon renders without errors
- [ ] GlobeIcon renders without errors (fillRule fixed)
- [ ] ToolsIcon renders without errors (clipRule fixed)
- [ ] TrophyIcon renders without errors
- [ ] BriefcaseIcon renders without errors
- [ ] HandshakeIcon renders without errors
- [ ] MailIcon renders without errors
- [ ] PhoneIcon renders without errors
- [ ] MapIcon renders without errors
- [ ] ClockIcon renders without errors

### Icon Properties
- [ ] No "Invalid DOM property" warnings in console
- [ ] All hyphenated properties converted to camelCase
- [ ] Icons display with correct colors
- [ ] Icon sizes are consistent and appropriate

---

## M. ANIMATIONS & TRANSITIONS

### CSS Animations
- [ ] Marquee scrolling animation works smoothly
- [ ] Flip card animation transitions smoothly (0.6s)
- [ ] Fade-in animations on page load
- [ ] Hover effects on buttons work smoothly
- [ ] No stuttering or performance issues

### Scrolling Behavior
- [ ] Smooth scroll behavior enabled
- [ ] Navigation scroll-to-section works properly
- [ ] Scroll margins prevent content overlap with navbar
- [ ] No jarring jumps when scrolling

---

## N. WEBSITE FAVICON

### Favicon Configuration
- [ ] HYT logo displays as favicon in browser tab
- [ ] Favicon displays in bookmarks
- [ ] Favicon file path is correct
- [ ] Favicon loads without 404 errors
- [ ] Favicon appears on all pages

---

## O. DEPLOYMENT & HOSTING

### Firebase Deployment
- [ ] Website is deployed to Firebase Hosting
- [ ] Website is accessible via deployed URL
- [ ] All assets load correctly from Firebase
- [ ] No CORS issues
- [ ] Deployment includes all latest changes

### Local Development
- [ ] npm run dev starts development server
- [ ] npm run build compiles without errors
- [ ] Hot Module Replacement (HMR) works
- [ ] No build warnings
- [ ] Environment variables load correctly

---

## TESTING SIGN-OFF

| Role | Name | Date | Signature |
|------|------|------|-----------|
| QA Tester | _________________ | __________ | __________ |
| Developer | _________________ | __________ | __________ |
| Project Manager | _________________ | __________ | __________ |
| Client/Approver | _________________ | __________ | __________ |

---

## NOTES & OBSERVATIONS

_Use this section to document any issues, observations, or deviations:_

```
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
```

---

## BUG TRACKING

| Issue ID | Description | Severity | Status | Resolution |
|----------|-------------|----------|--------|------------|
| | | | | |
| | | | | |
| | | | | |

**Severity Levels:** Critical | High | Medium | Low

---

**Checklist Completion Date:** ________________  
**Total Items:** 200+  
**Items Passed:** ______ | **Items Failed:** ______ | **Items Skipped:** ______

**Overall Status:** ☐ PASS | ☐ FAIL | ☐ PASS WITH MINOR ISSUES
