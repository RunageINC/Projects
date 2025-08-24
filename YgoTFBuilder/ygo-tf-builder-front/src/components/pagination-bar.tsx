import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PaginationBar = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  return (
    <Tabs className="flex" defaultValue={currentPage.toString()}>
      <TabsList>
        {Array.from(Array(totalPages), (_element, idx) => {
          return <TabsTrigger value={idx.toString()}>{idx}</TabsTrigger>;
        })}
      </TabsList>
    </Tabs>
  );
};
