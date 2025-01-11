export const DeckNameInput = ({ value, setValue }) => (
  <input
    type="text"
    value={value}
    placeholder="Type the deck name"
    onChange={setValue}
    required
  />
);
