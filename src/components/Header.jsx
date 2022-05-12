export const Header = () => {
  const componentName = () => "Header";
  return (
    <header>
      <div>テスト</div>
      <div className="test-wrapper">
        <p className="text">
          テスト このコンポーネントの名前は{componentName()}です。
        </p>
      </div>
    </header>
  );
};
