import HeroSplitRow from './HeroSplitRow';
import HeroImageCenter from './HeroImageCenter';

export default function HomeReel() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-primary text-4xl lg:text-6xl font-bold mb-4">
            See Us in Action
          </h1>
          <p className="text-base-content/70 text-xl max-w-3xl mx-auto">
            Experience the authentic BBQ process from start to finish
          </p>
        </div>

        {/* JAGGED LAYOUT PATTERN */}
        <div className="space-y-16">
          {/* ROW 1: Words → Video (Normal) */}
          <HeroSplitRow
            title="Behind the Scenes"
            subtitle="Watch how we smoke meats low and slow, prepare fresh sides daily, and create the authentic BBQ experience you love."
            buttonText="Visit Our Kitchen"
            buttonAction={() => console.log('Visit kitchen')}
            visual="https://www.youtube.com/embed/HnLHTyBqYjc"
            visualType="video"
            reverse={false}
          />

          {/* DIVIDER */}
          <div className="divider divider-neutral"></div>

          {/* ROW 2: Full-Width Centered Image */}
          <HeroImageCenter
            image="https://picsum.photos/1200/400"
            alt="All Da Smoke Restaurant Interior"
            caption="Our authentic BBQ pit where the magic happens"
          />

          {/* DIVIDER */}
          <div className="divider divider-neutral"></div>

          {/* ROW 3: Image → Words (Reversed) */}
          <HeroSplitRow
            title="Fresh Daily Preparation"
            subtitle="Every morning our pitmasters start early, hand-selecting the finest cuts and preparing our signature rubs and sauces."
            buttonText="View Our Menu"
            buttonAction={() => console.log('View menu')}
            visual="https://picsum.photos/600/400"
            visualType="image"
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}
