body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f2f2f2;
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 60px;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

#addCardBtn {
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

#cardOptions {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#cardOptions.hidden {
  display: none;
}

main#board {
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 15px;
}
