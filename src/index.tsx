import ReactDOM from 'react-dom'
import { useInitData } from '@vkruglikov/react-telegram-web-app';

const [initDataUnsafe, initData] = useInitData();

ReactDOM.render(
    <>
       {initDataUnsafe} ||| {initData}
    </>,
    document.getElementById('root')
);