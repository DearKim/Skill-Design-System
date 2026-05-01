import { ToastProvider, ToastViewport } from './components/Toast';
import { TooltipProvider } from './components/Tooltip';
import { PlaygroundLayout } from './playground/PlaygroundLayout';

import { TokensSection } from './playground/sections/TokensSection';
import { TypographySection } from './playground/sections/TypographySection';

import { ButtonSection } from './playground/sections/ButtonSection';
import { BadgeSection } from './playground/sections/BadgeSection';
import { LinkSection } from './playground/sections/LinkSection';

import { InputSection } from './playground/sections/InputSection';
import { SelectSection } from './playground/sections/SelectSection';
import { CheckboxSection } from './playground/sections/CheckboxSection';
import { SwitchSection } from './playground/sections/SwitchSection';

import { CardSection } from './playground/sections/CardSection';
import { SeparatorSection } from './playground/sections/SeparatorSection';

import { TabsSection } from './playground/sections/TabsSection';
import { AvatarSection } from './playground/sections/AvatarSection';
import { KbdSection } from './playground/sections/KbdSection';

import { DialogSection } from './playground/sections/DialogSection';
import { SheetSection } from './playground/sections/SheetSection';
import { TooltipSection } from './playground/sections/TooltipSection';

import { AlertSection } from './playground/sections/AlertSection';
import { ToastSection } from './playground/sections/ToastSection';
import { ProgressSection } from './playground/sections/ProgressSection';
import { SpinnerSection } from './playground/sections/SpinnerSection';
import { SkeletonSection } from './playground/sections/SkeletonSection';

export default function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <ToastProvider swipeDirection="right" duration={4500}>
        <PlaygroundLayout>
          <TokensSection />
          <TypographySection />
          <ButtonSection />
          <BadgeSection />
          <LinkSection />
          <InputSection />
          <SelectSection />
          <CheckboxSection />
          <SwitchSection />
          <CardSection />
          <SeparatorSection />
          <TabsSection />
          <AvatarSection />
          <KbdSection />
          <DialogSection />
          <SheetSection />
          <TooltipSection />
          <AlertSection />
          <ToastSection />
          <ProgressSection />
          <SpinnerSection />
          <SkeletonSection />
        </PlaygroundLayout>
        <ToastViewport />
      </ToastProvider>
    </TooltipProvider>
  );
}
