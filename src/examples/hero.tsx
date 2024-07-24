import { Button, Headline, Subtitle } from '@/components';

const HeroExamplePrimary: React.FunctionComponent = () => {
  return (
    <div>
      <Headline size="lg">{'Components'}</Headline>
      <Subtitle>
        {
          'Crafting engaging UI/UX experiences to Companies, build and design with me'
        }
      </Subtitle>
      <div className="mt-6 flex flex-row items-center justify-start gap-3">
        <Button>Get Started</Button>
        <Button variant="secondary">Follow me</Button>
      </div>
    </div>
  );
};

const HeroExampleSecondary: React.FunctionComponent = () => {
  return (
    <div>
      <Headline size="lg">{'Components'}</Headline>
      <Subtitle>
        {
          'Crafting engaging UI/UX experiences to Companies, build and design with me'
        }
      </Subtitle>
      <div className="mt-6 flex flex-row items-center justify-start gap-3">
        <Button variant="solid">Get Started</Button>
        <Button variant="outline">Follow me</Button>
      </div>
    </div>
  );
};

export { HeroExamplePrimary, HeroExampleSecondary };
