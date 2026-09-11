import { PrismaHero } from "@/components/ui/prisma-hero";
import DancingLetters from "@/components/ui/dancing-letters";

export function DemoOne() {
  return <PrismaHero />;
}

export function DancingLettersDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-6">
      <DancingLetters text="Craftly" showAsterisk />
    </div>
  );
}

export default DemoOne;
