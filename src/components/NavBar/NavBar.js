import React from "react";

class NavBar extends React.Component {
  componentDidMount() {
    const mainNav = document.getElementById("nav");

    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      //if the window goes below nav height (100px)
      //add class to make it sticky.
      if (scrollTop > 90) {
        mainNav.classList.add("sticky");
      } else {
        mainNav.classList.remove("sticky");
      }

      ///if the window goes below 150px,
      //add the transition of dropping down and appearing
      if (scrollTop > 150) {
        mainNav.classList.add("in-view");
      } else {
        mainNav.classList.remove("in-view");
      }
    });
  }

  render() {
    return (
      <div className="nav-wrapper" id="nav">
        <div className="nav-inner-wrapper">{this.props.children}</div>
      </div>
    );
  }
}

export default NavBar;
