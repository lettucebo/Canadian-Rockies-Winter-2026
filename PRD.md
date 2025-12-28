# Planning Guide

A romantic single-page travel itinerary website showcasing a winter couples trip to the Canadian Rockies from January 3-6, 2026, featuring daily schedules, weather integration, photo galleries, and accommodation tracking.

**Experience Qualities**: 
1. **Romantic & Cozy** - Evoke the warmth of sitting by a fireplace on a snowy night, with soft colors and intimate typography that makes planning feel like part of the adventure.
2. **Effortlessly Organized** - Present complex multi-day itineraries with clear visual hierarchy, interactive cards, and progress tracking that makes information discovery natural and delightful.
3. **Adventure-Ready** - Provide practical tools like real-time weather, navigation links, and safety reminders while maintaining the dreamlike quality of winter travel.

**Complexity Level**: Light Application (multiple features with basic state)
- This is an interactive itinerary viewer with accordion components, day navigation, weather API integration, and persistent state tracking for which day the user is currently viewing.

## Essential Features

**Daily Progress Tracker**
- Functionality: Visual indicator showing current day (Day 1-4) with ability to manually switch or auto-detect based on actual dates
- Purpose: Helps users orient themselves within the trip timeline and quickly jump to relevant information
- Trigger: Automatic on page load based on current date, manual via clicking day indicators
- Progression: Page loads → System checks date → Highlights current day → User can click other days → Scrolls to that day's content → Updates active state
- Success criteria: Correct day is highlighted, clicking navigates smoothly to the corresponding section, visual feedback is immediate

**Expandable Daily Cards (Accordion)**
- Functionality: Each day contains collapsible cards for attractions (blue), restaurants (orange), and transportation (gray), with photo galleries, navigation links, and highlighted keywords
- Purpose: Organize dense itinerary information in digestible, interactive chunks while maintaining visual interest
- Trigger: User clicks on card header to expand/collapse
- Progression: User views day section → Sees collapsed cards with preview → Clicks to expand → Views full details with photos → Can click navigation for directions → Collapses when done
- Success criteria: Smooth animation, only one card open at a time (or all can be open), photos load correctly, navigation links work, color coding is clear

**Real-Time Weather Display**
- Functionality: Shows current weather conditions (temperature, snow status, icon) for each day's primary location using OpenWeatherMap API
- Purpose: Helps users prepare appropriate clothing and adjust expectations for outdoor activities
- Trigger: Loads automatically when day section comes into view
- Progression: Day becomes visible → API call fires → Weather data fetches → Displays temperature and conditions with icon → Updates periodically
- Success criteria: Weather displays within 2 seconds, shows accurate location-specific data, gracefully handles API failures with fallback message

**Location-Based Photo Galleries**
- Functionality: Auto-populates each attraction card with 4-6 curated winter photos in carousel or grid format
- Purpose: Build excitement and visual context for each destination before arrival
- Trigger: Card expands to reveal photos
- Progression: User expands card → Photos load from provided URLs → User can swipe/click through carousel → Taps to view larger (optional)
- Success criteria: Images load efficiently, carousel is touch-friendly on mobile, fallback to Unsplash if URLs fail

**Accommodation & Notes Sidebar**
- Functionality: Fixed/sticky panel showing nightly accommodation options (marked as "候補中" for pending) and important winter safety reminders
- Purpose: Keep critical lodging and safety information accessible without scrolling
- Trigger: Always visible on desktop, accessible via tab/button on mobile
- Progression: User needs hotel info → Glances at sidebar → Sees all options with status → Can click for booking links
- Success criteria: Stays visible during scroll on desktop, easily accessible on mobile, clear visual distinction between confirmed and pending options

## Edge Case Handling

- **API Failure**: Weather widget shows "Weather data unavailable" with snowflake icon fallback
- **Missing Photos**: Use Unsplash API with location keywords as fallback for any broken image URLs
- **Date Outside Range**: If current date is before Jan 3 or after Jan 6, default to showing Day 1
- **Slow Network**: Show skeleton loaders for photos and weather while data loads
- **Mobile Landscape**: Ensure accordion cards remain usable and photos don't break layout
- **Long Content**: Implement scroll within card content if it exceeds viewport height

## Design Direction

The design should feel like flipping through a luxurious travel journal on a snowy evening - warm, intimate, and aspirational. Think cozy cabin meets modern minimalism, where every element whispers "winter romance" without being overly sentimental. The interface should fade into the background, letting the stunning mountain photography and carefully planned itinerary take center stage.

## Color Selection

A palette inspired by winter sunsets over snow-covered mountains, balanced between cool atmospheric tones and warm fireside accents.

- **Primary Color**: Deep Slate Blue `oklch(0.35 0.05 250)` - Represents twilight mountains, used for headers and primary interactive elements, communicates stability and adventure
- **Secondary Colors**: 
  - Soft Snow `oklch(0.98 0.005 250)` for backgrounds - creates breathing room and cleanliness
  - Warm Amber `oklch(0.70 0.15 55)` for restaurant/food elements - evokes fireside warmth and culinary delight
  - Ice Blue `oklch(0.75 0.08 230)` for attraction cards - reflects frozen lakes and winter skies
- **Accent Color**: Sunset Orange `oklch(0.68 0.18 45)` - Commands attention for CTAs, navigation buttons, and important highlights
- **Foreground/Background Pairings**: 
  - Background (Soft Snow #F9FAFB): Deep Slate Text (#2D3748) - Ratio 10.2:1 ✓
  - Ice Blue Cards: Deep Slate Text - Ratio 5.8:1 ✓
  - Accent (Sunset Orange): White text (#FFFFFF) - Ratio 4.9:1 ✓
  - Primary (Deep Slate): White text - Ratio 9.1:1 ✓

## Font Selection

Typography should feel both editorial and inviting, combining classic elegance with modern readability for a travel magazine aesthetic.

- **Typographic Hierarchy**: 
  - H1 (Site Title): Playfair Display Bold/42px/tight letter-spacing (-0.02em) - Romantic and timeless
  - H2 (Day Headers): Playfair Display SemiBold/32px/normal spacing - Clear section breaks
  - H3 (Card Titles): Inter SemiBold/20px/slight negative spacing (-0.01em) - Modern clarity
  - Body Text: Inter Regular/16px/relaxed line-height (1.6) - Maximum readability
  - Captions/Labels: Inter Medium/14px/uppercase with wide spacing (0.05em) - Functional hierarchy

## Animations

Animations should feel like gentle snowfall - present and polished but never distracting from the content, using subtle motion to guide attention and reinforce spatial relationships.

- Accordion expand/collapse: 300ms ease-out with slight bounce on open
- Day navigation: Smooth scroll with 500ms duration + easing
- Photo carousel: 250ms slide transitions with momentum feel
- Weather widget: Fade in over 400ms when data loads
- Hover states: 150ms color/scale transitions for tactile feedback
- Progress tracker: Subtle pulse animation on current day indicator

## Component Selection

- **Components**: 
  - Accordion (Shadcn) for daily itinerary cards with custom styling for color-coded borders
  - Card (Shadcn) as base for all content blocks with modified shadows for depth
  - Progress (Shadcn) for day tracker with custom circular design
  - Carousel (Shadcn/Embla) for photo galleries with touch gestures
  - Tabs (Shadcn) for mobile sidebar toggle between accommodations and notes
  - Badge (Shadcn) for food highlights and booking status with color variants
  - Button (Shadcn) for navigation links with Phosphor Icons (MapPin, NavigationArrow)
  - Alert (Shadcn) for important winter safety notices with amber accent
  
- **Customizations**: 
  - Custom circular day progress component with animated arc
  - Weather widget component with OpenWeatherMap integration
  - Photo gallery with lazy loading and lightbox capability
  - Sticky mobile navigation bar for day switching
  
- **States**: 
  - Buttons: Default with subtle shadow, hover lifts with deeper shadow, active scales down slightly, disabled with 50% opacity
  - Accordion: Closed shows preview text, hover highlights header, open reveals full content with smooth height transition
  - Day indicators: Inactive is muted, active has gradient glow, past days slightly dimmed
  
- **Icon Selection**: 
  - MapPin for location/navigation
  - Snowflake for weather and winter elements
  - Calendar for dates
  - BedDouble for accommodations
  - ForkKnife for restaurants
  - Car for transportation
  - Mountains for attractions
  - Warning for safety notices
  
- **Spacing**: 
  - Section gaps: 16 (mobile) / 24 (desktop)
  - Card padding: 6 (mobile) / 8 (desktop)
  - Element margins: 4 base unit with 8/12 for related groups
  - Grid gaps: 4 (tight) / 6 (comfortable) / 8 (spacious)
  
- **Mobile**: 
  - Stack all cards vertically with full-width on mobile
  - Fixed bottom navigation bar for day switching (always accessible)
  - Sidebar becomes bottom sheet or tabs
  - Reduce heading sizes by 25% on mobile
  - Touch-friendly 48px minimum tap targets
  - Simplified photo grid (2 columns instead of 3)
  - Hamburger menu for accommodations/notes access
