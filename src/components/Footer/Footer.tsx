export const Footer = (): JSX.Element => (
  <footer>
    <small>
      <div>&copy; Copyright 2021, Ben Thiede</div>
      <div>This page does not use any tracking or cookies.</div>
    </small>
    <a
      href="https://www.buymeacoffee.com/TheMaru"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
        alt="Buy Me A Coffee"
        style={{ height: '60px', width: '217px' }}
      />
    </a>
    <style jsx>{`
      footer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      small {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
       {
        /* 
      small > div {
        flex: 0 1 auto;
      } */
      }
    `}</style>
  </footer>
);
