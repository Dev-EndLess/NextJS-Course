export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("it-IT", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
