const COMPLETE = 'COMPLETE';
const RANDOMIZE = 'RANDOMIZE';
const ADJUST_STORE = 'ADJUST_STORE';

export const adjustStore = studentName => ({
  type: ADJUST_STORE,
  studentName
});

export const complete = () => ({
  type: COMPLETE
});

export const randomize = () => ({
  type: RANDOMIZE
});

export function pickingStudent(students) {
  // Pass array to pickingStudent on front end

  return function(dispatch) {
    const randomNum = Math.random() * Math.round(students.length - 1);
    const studentName = students[randomNum];
    dispatch(adjustStore(studentName));
  };
}
