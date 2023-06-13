import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTern = searchTerm.replaceAll('20%', ' ')
  
  if (!data?.query?.pages) {
    return {
      title: `${displayTern} Not Found`
    }
  }

  return {
    title: displayTern,
    description: `Search results for ${displayTern}`
  }
}

export default async function Page({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query.pages;

  const totalResults = results ? (
    Object.values(results).map((result) => {
      return <Item key={result.pageid} result={result} />
      // return <pre>{ JSON.stringify(result) }</pre>
    })
  ) : (
    <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
  );

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {totalResults}
    </main>
  );
}
