// This component creates a storytelling section it combines different layout components.
import HeroSplitRow from '../HeroSplitRow';
import HeroImageCenter from '../HeroImageCenter';

export default function HomeReel() {
  return (
    // Main section wrapper with vertical padding and base background
    <section className="py-16 bg-base-100">
      {/* Container that centers content and adds horizontal padding */}
      <div className="container mx-auto px-4">
        {/* SECTION TITLE */}
        {/* Centered title area with generous bottom margin */}
        <div className="text-center mb-16">
          {/* Main heading using primary brand color with responsive text size */}
          <h1 className="text-primary text-4xl lg:text-6xl font-bold mb-4">
            See Us in Action
          </h1>
          {/* Subtitle with faded color and constrained width for readability */}
          <p className="text-base-content/70 text-xl max-w-3xl mx-auto">
            Experience the authentic BBQ process from start to finish
          </p>
        </div>

        {/* JAGGED LAYOUT PATTERN */}
        {/* Container that creates consistent spacing between all content rows */}
        <div className="space-y-16">
          {/* ROW 1: Text → Video (Normal layout) */}
          {/* Shows behind-the-scenes content with text on left, video on right */}
          <HeroSplitRow
            title="Behind the Scenes"
            subtitle="Watch how we smoke meats low and slow, prepare fresh sides daily, and create the authentic BBQ experience you love."
            buttonText="Visit Our Kitchen"
            buttonAction={() => console.log('Visit kitchen')}
            visual="https://www.youtube.com/embed/HnLHTyBqYjc"
            visualType="video"
            reverse={false} // Normal layout: text first, then video
          />

          {/* DIVIDER */}
          {/* daisyUI divider with neutral color to separate content sections */}
          <div className="divider divider-neutral"></div>

          {/* ROW 2: Full-Width Centered Image */}
          {/* Hero moment that showcases the restaurant interior or main feature */}
          <HeroImageCenter
            image="https://picsum.photos/1200/400"
            alt="All Da Smoke Restaurant Interior"
            caption="Our authentic BBQ pit where the magic happens"
          />

          {/* DIVIDER */}
          {/* Another divider to separate the next content section */}
          <div className="divider divider-neutral"></div>

          {/* ROW 3: Image → Text (Reversed layout) */}
          {/* Shows daily prep story with image on left, text on right */}
          <HeroSplitRow
            title="Fresh Daily Preparation"
            subtitle="Every morning our pitmasters start early, hand-selecting the finest cuts and preparing our signature rubs and sauces."
            buttonText="View Our Menu"
            buttonAction={() => console.log('View menu')}
            visual="https://picsum.photos/600/400"
            visualType="image"
            reverse={true} // Reversed layout: image first, then text
          />
        </div>
      </div>
    </section>
  );
}
