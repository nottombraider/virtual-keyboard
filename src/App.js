import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const app = document.createElement('div');

app.className = 'app';

app.appendChild(Header());
app.appendChild(Main.getRef());
app.appendChild(Footer());

export default app;
