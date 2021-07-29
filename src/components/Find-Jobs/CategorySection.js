import DeveloperCategory from "./category-component/DeveloperCategory";
import CountryCategory from "./category-component/CountryCategory";
import SkillSetCategory from "./category-component/SkillSetCategory";
export default function CategorySection() {
  return (
    <div className="container mx-auto md:px-8 px-4 md:mt-8">
      <div className="flex flex-wrap flex-row justify-center">
        <div className="md:w-4/12 w-4/12">
          <div className="flex rounded-lg">
            <DeveloperCategory />
          </div>
        </div>
        <div className="md:w-4/12 w-4/12">
          <div className="flex rounded-lg md:mt-0">
            <CountryCategory />
          </div>
        </div>
        <div className="md:w-4/12 w-4/12">
          <SkillSetCategory />
        </div>
      </div>
    </div>
  );
}
