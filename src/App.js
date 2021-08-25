import BaseForm from './component/BaseForm';
import Card from './component/Ui/Card';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <Card>
        <BaseForm />
      </Card>
    </div>
  );
}

export default App;
