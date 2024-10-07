const a = {
  all() {
    return {
      queryKey: ["sdfdsfsdf"],
    };
  },
  allBySearch(query: string) {
    return {
      queryKey: [...a.all().queryKey, query],
    };
  },
};
