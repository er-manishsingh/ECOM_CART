import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
  data: state.cardItems.cardData,
});

export default connect(mapStateToProps)(Header);
