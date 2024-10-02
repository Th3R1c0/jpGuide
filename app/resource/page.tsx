
import AppDetailsPage from "@/components/app-details";
import { AppDirectory } from "@/components/app-directory";
import { SearchResultsComponent } from "@/components/search-results";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <AppDetailsPage />
      <SearchResultsComponent />
    </div>
    
  );
}
