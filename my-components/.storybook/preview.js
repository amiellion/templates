import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datetime/css/react-datetime.css";
import 'index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}