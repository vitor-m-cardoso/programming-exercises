const checkRequiredFields = require('../utils/checkRequiredFields');

const validateWaypoints = (waypoints) => {
  const waipointsRequiredFields = ['address', 'stopOrder'];

  for (let index = 0; index < waypoints.length; index += 1) {
    const waypoint = waypoints[index];
    const error = checkRequiredFields(waypoint, waipointsRequiredFields);
    if (error) return error;
  }
};

const validateTravelFields = (req, res, next) => {
  const travelRequiredFields = ['startingAddress', 'endingAddress'];
  const { body } = req;

  const travelError = checkRequiredFields(body, travelRequiredFields);
  if (travelError) return res.status(400).json({ message: travelError });

  const { waypoints } = body;
  if (waypoints) {
    const waipointError = validateWaypoints(waypoints);
    if (waipointError) return res.status(400).json({ message: waipointError });
  }

  next();
};

module.exports = validateTravelFields;