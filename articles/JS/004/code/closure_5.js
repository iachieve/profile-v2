const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '🚀'
  };
  setInterval(passTime, 1000);

  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime
  }
};

const ohno = makeNuclearButton();
ohno.