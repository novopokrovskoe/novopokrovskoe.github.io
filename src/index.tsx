import ReactDOM from 'react-dom'
import { useInitData } from '@vkruglikov/react-telegram-web-app';

const [initDataUnsafe, initData] = useInitData();

ReactDOM.render(
    <>
       {initDataUnsafe} ||| {initData}
    </>,
    document.getElementById('root')
);

//https://np.samevibe.space/#tgWebAppData=query_id%3DAAHh3_cFAAAAAOHf9wXrK4WZ%26user%3D%257B%2522id%2522%253A100130785%252C%2522first_name%2522%253A%2522Konstantin%2522%252C%2522last_name%2522%253A%2522Kukharev%2522%252C%2522username%2522%253A%2522darchi%2522%252C%2522language_code%2522%253A%2522ru%2522%252C%2522is_premium%2522%253Atrue%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1697045029%26hash%3Db2728373e924834f545be2391a5410d9afc091d6c3495a81f108d65e2b79c336&tgWebAppVersion=6.9&tgWebAppPlatform=macos&tgWebAppThemeParams=%7B%22secondary_bg_color%22%3A%22%231c1c1c%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22button_color%22%3A%22%23007aff%22%2C%22bg_color%22%3A%22%23282828%22%2C%22hint_color%22%3A%22%23ffffff%22%2C%22link_color%22%3A%22%23007aff%22%7D