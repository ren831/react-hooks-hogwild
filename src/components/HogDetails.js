function HogDetails({ hog }) {
  return (
    <div>
      <div id="Specialty">
        <b>Specialty:</b> {hog.specialty}
      </div>
      <div id="Greased">
        <b> Greased?:</b> {hog.greased ? "Is greased" : "Is not greased"}
      </div>
      <div id="Weight">
        {" "}
        <b>weight:</b>
        {hog.weight}
      </div>
      <div id="Medal">
        <b> Highest Medal Achieved:</b> {hog["highest medal achieved"]}
      </div>
    </div>
  );
}
<b></b>;
export default HogDetails;
