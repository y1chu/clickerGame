let score = 0;
let pointsPerClick = 1;
let clickUpgradeCount = 0;
let passiveIncomeRate = 0;
let passiveIncomeUpgradeCount = 0;

function incrementScore() {
  score += pointsPerClick;
  updateScoreDisplay();
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.innerText = score;
}

function buyClickUpgrade() {
  const upgradeCost = calculateClickUpgradeCost();
  if (score >= upgradeCost) {
    score -= upgradeCost;
    pointsPerClick += 1;
    clickUpgradeCount += 1;
    updateScoreDisplay();
    updatePointsPerClickDisplay();
    updateUpgradeButtons();
  } else {
    alert("Not enough points to buy the click upgrade!");
  }
}

function buyPassiveIncomeUpgrade() {
  const upgradeCost = calculatePassiveIncomeUpgradeCost();
  if (score >= upgradeCost) {
    score -= upgradeCost;
    passiveIncomeRate += 1;
    passiveIncomeUpgradeCount += 1;
    updateScoreDisplay();
    updatePassiveIncomeRateDisplay();
    updateUpgradeButtons();
  } else {
    alert("Not enough points to buy the passive income upgrade!");
  }
}

function updatePointsPerClickDisplay() {
  const pointsPerClickDisplay = document.getElementById("points-per-click");
  pointsPerClickDisplay.innerText = pointsPerClick;
}

function updatePassiveIncomeRateDisplay() {
  const passiveIncomeRateDisplay = document.getElementById("passive-income-rate");
  passiveIncomeRateDisplay.innerText = passiveIncomeRate;
}

function calculateClickUpgradeCost() {
  return 10 * Math.pow(3, clickUpgradeCount);
}

function calculatePassiveIncomeUpgradeCost() {
  return 25 * Math.pow(6, passiveIncomeUpgradeCount);
}

function updateUpgradeButtons() {
  const clickUpgradeButton = document.getElementById("upgrade-button");
  const clickUpgradeCost = calculateClickUpgradeCost();
  clickUpgradeButton.innerText = `Upgrade Click (cost: ${Math.ceil(clickUpgradeCost)})`;

  const passiveIncomeButton = document.getElementById("passive-income-button");
  const passiveIncomeUpgradeCost = calculatePassiveIncomeUpgradeCost();
  passiveIncomeButton.innerText = `Passive Income (cost: ${Math.ceil(passiveIncomeUpgradeCost)})`;
}

// Function to generate points passively based on the passive income rate
function generatePassiveIncome() {
  score += passiveIncomeRate;
  updateScoreDisplay();
}

// Call generatePassiveIncome() every second (1000 ms)
setInterval(generatePassiveIncome, 1000);
