import OurWorks from '@/components/our-works';
import MenuBar from '@/components/ui-kit/menu-bar';

export default function Page() {
  return (
    <div className="w-full flex-col gap-24">
      <MenuBar headerClassName="bg-sky-300 rounded-lg mt-4 " showLogo={true} />
      <OurWorks />
    </div>
  );
}
