function DataIteration(props: any) {
  const { datas = [], startLength, endLength, children } = props;
  return (
    <>
      {datas &&
        datas.length >= endLength &&
        datas
          .slice(startLength, endLength)
          .map((value: any) => children({ datas: value }))}
    </>
  );
}

export default DataIteration;
