<?php 

        

        class LetterCounter
        {
            // Write your code here
            private static function charCounter($string)
            {
                $charArray = str_split($string);
                $charQueue = [];
                $charCount = [];
                
                $ptr = 0;
                foreach ($charArray as $i) {
                    $count = 0;
                    if (!in_array($i, $charQueue)) {
                        foreach ($charArray as $j) {
                            if ($i === $j) {
                                $count++;
                            }
                        }
                        $charCount[$ptr]['char'] = $i;
                        $charCount[$ptr]['n'] = $count;
                        $ptr++;
                    }
                    array_push($charQueue, $i);
                }

                return $charCount;
            }

            private static function toAsterisk($number)
            {
                $buf = '';
                for ($i = 0; $i < $number; $i++) {
                    $buf .= '*';
                }

                return $buf;
            }

            public static function CountLettersAsString($string)
            {
                $charCount = self::charCounter($string);

                $buf = '';
                foreach ($charCount as $arr) {
                    $char = strtolower($arr['char']);
                    $n = self::toAsterisk($arr['n']);
                    $buf .= sprintf('%s:%s,', $char, $n);
                }
                $buf = rtrim($buf, ',');

                return $buf;
            }
        }

        function letterCounterCheck($string)
        {
            return LetterCounter::CountLettersAsString($string);
        }

        echo(letterCounterCheck('INTERVIEWEE'));

    ?>