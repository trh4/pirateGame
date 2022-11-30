import { useEffect } from "react";
export default function Popup(props) {
  function closeValidate() {
    if (document.querySelector(".form").checkValidity()) {
      const email = document.getElementById("email").value;
      const name = document.getElementById("name").value;
      document.querySelector(".popup").classList.remove("popup--show");
      props.SetEmail(email);
      props.SetName(name);
      props.SetcurrentBox(0);
    }
  }
  function close() {
    document.querySelector(".popup").classList.remove("popup--show");
    props.SetcurrentBox(0);
  }
  function welcome() {
    return (
      <aside className="popup popup--show">
        <div className="popup__content">
          <div className="popup__left">
            <button className="popup__close" onClick={close}>
              &times;
            </button>
            <h1 className="heading-primary u-margin-bottom-small">
              PirateGame - Get The Treasure
            </h1>
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondery">
                  please enter email to start the game
                </h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  // required
                  id="name"
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  required
                  id="email"
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group">
                <button className="btn btn--blue" onClick={closeValidate}>
                  lets go!
                </button>
              </div>
            </form>
          </div>
          <div className="popup__right"></div>
        </div>
      </aside>
    );
  }
  function gotNumber(msg, win) {
    return (
      <aside className="popup">
        <div className="popup__content">
          <div className="popup__left">
            <button className="popup__close" onClick={close}>
              &times;
            </button>
            <h1 className="heading-primary u-margin-bottom-small">{msg}</h1>
            <h2 className="heading-tertiary u-margin-bottom-medium">
              {win === true ? "you won" : "Game Over"}
            </h2>
            <button className="btn btn--blue" onClick={close}>
              Try Again
            </button>
          </div>
          <div className="popup__right"></div>
        </div>
      </aside>
    );
  }
  useEffect(() => {
    if (props.CurrentBox !== 0) {
      setTimeout(
        () => {
          if (document.querySelector(".popup")) {
            document.querySelector(".popup").classList.add("popup--show");
            document.querySelector(".sidebar__rollDice").disabled = false;
          }
        },
        props.CurrentBox === 7 ? 1500 : props.CurrentBox * 1500 - 1500
      );
    }

  }, [props.CurrentBox]);
  function modal() {
    switch (props.CurrentBox) {
      case -1:
        return welcome();
      case 1:
        return gotNumber("You stayed in the same place..", false, 0);
      case 2:
        return gotNumber("You found new rum", true);
      case 3:
        return gotNumber("The dragon ate you", false);
      case 4:
        return gotNumber("You Found the Treasure", true);
      case 5:
        return gotNumber("props.randJoke", true);
      case 6:
        return gotNumber("You reached the island and survived!", true);
      case 7:
        return gotNumber("You found spoiled rum", false);
      default:
        break;
    }
  }

  return modal();
}
