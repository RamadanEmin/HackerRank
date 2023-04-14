// DAY 27: TESTING

class TestDataEmptyArray{
    public:
        static vector<int> get_array() { 
            vector<int> arr{};
            return arr;
        }
    };
    
    class TestDataUniqueValues{
    public:
        static vector<int> get_array() {
            vector<int> arr{3,2,4,1};
            return arr;
        }
        
        static int get_expected_result() {
            return 3;
        }
    };
    
    class TestDataExactlyTwoDifferentMinimums{
    public:
        static vector<int> get_array() { 
            vector<int> arr {2,2,1,1,3}; 
            return arr;
        }
        
        static int get_expected_result() {
            return 2; 
        }
    };