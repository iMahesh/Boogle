class TypeFinder {
   static findTheTypeOfDie(id) {
        if (constants.types['corners'].includes(id)) {
            let result;
            // 1,5,21,25 
            switch (id) {
                case 1:
                    result = "cornerLT";
                    result = [-1, -5, -6];
                    break;
                case 5:
                    result = "cornerRT";
                    result = [1, -4, -5];
                    break;
                case 21:
                    result = "cornerLB";
                    result = [-1, 4, 5]
                    break;
                case 25:
                    result = "cornerRB";
                    result = [1, 5, 6];
                    break;
                default:
                    alert("Can't find the type of corner");
            }
            return result;
        } else if (constants.types['middles'].includes(id)) {
            let result;
            // 2,3,4,6,10,11,15,16,20,22,23,24
            switch (id) {
                case 2:
                case 3:
                case 4:
                    result = "middleTop";
                    result = [-1, -4, -5, -6, 1]
                    break;
                case 10:
                case 15:
                case 20:
                    result = "middleRight";
                    result = [-4, -5, 1, 5, 6];
                    break;
                case 22:
                case 23:
                case 24:
                    result = "middleBottom";
                    result = [-1, 1, 4, 5, 6]
                    break;
                case 6:
                case 11:
                case 16:
                    result = "middleLeft";
                    result = [-1, -5, -6, 4, 5]
                    break;
                default:
                    alert("can't find the type of middle");
            }
            return result;
        } else return [-1, -4, -5, -6, 1, 4, 5, 6];
    }

}