// ADsP · 빅데이터분석기사 R 문제은행 (100문항)
const QUESTION_BANK = [
 {
  "id": 1,
  "exam": "ADsP",
  "topic": "R 기초 자료구조",
  "q": "R에서 단일 데이터 타입을 갖는 1차원 데이터 구조로 가장 적절한 것은?",
  "opts": [
   "Vector (벡터)",
   "Data Frame (데이터 프레임)",
   "List (리스트)",
   "Factor (팩터)"
  ],
  "ans": 1,
  "exp": "Vector는 동일한 데이터 타입(숫자, 문자, 논리형 등)만을 가질 수 있는 1차원 배열 형태의 자료구조입니다."
 },
 {
  "id": 2,
  "exam": "ADsP",
  "topic": "R 기초 자료구조",
  "q": "다음 R 코드의 실행 결과로 가장 적절한 것은?\n\nx <- 1:5\ny <- seq(10, 50, by=10)\nresult <- rbind(x, y)",
  "opts": [
   "5행 2열 데이터 프레임",
   "2행 5열 행렬 (Matrix)",
   "5행 2열 행렬 (Matrix)",
   "2개의 원소를 가진 리스트"
  ],
  "ans": 2,
  "exp": "rbind는 행(row)을 기준으로 합치는 함수이므로, 길이가 5인 두 벡터 x, y를 결합하면 2행 5열의 행렬(Matrix)이 생성됩니다."
 },
 {
  "id": 3,
  "exam": "ADsP",
  "topic": "R 기초 자료구조",
  "q": "R에서 다양한 데이터 타입(숫자, 문자, 행렬, 함수 등)을 원소로 가질 수 있는 가장 유연한 자료구조는?",
  "opts": [
   "Vector",
   "Matrix",
   "List",
   "Array"
  ],
  "ans": 3,
  "exp": "List는 서로 다른 데이터 타입 및 서로 다른 길이의 객체(벡터, 행렬, 데이터프레임 등)를 원소로 포함할 수 있습니다."
 },
 {
  "id": 4,
  "exam": "ADsP",
  "topic": "R 기초 자료구조",
  "q": "R에서 범주형(Categorical) 변수를 표현하기 위해 사용되는 데이터 타입은?",
  "opts": [
   "Character",
   "Factor",
   "Numeric",
   "Logical"
  ],
  "ans": 2,
  "exp": "Factor는 명목형 또는 순서형 범주형 데이터를 저장하고 관리하기 위한 자료구조입니다."
 },
 {
  "id": 5,
  "exam": "빅데이터분석기사",
  "topic": "R 기초 자료구조",
  "q": "다음 중 R의 데이터 프레임(Data Frame)에 대한 설명으로 올바르지 않은 것은?",
  "opts": [
   "각 열(Column)은 서로 다른 데이터 타입을 가질 수 있다.",
   "동일한 열 내의 데이터 타입은 모두 동일해야 한다.",
   "2차원 구조로 행과 열로 이루어져 있다.",
   "모든 열의 길이가 서로 달라도 생성할 수 있다."
  ],
  "ans": 4,
  "exp": "데이터 프레임의 모든 열(Column)은 원소의 개수(길이)가 동일해야 합니다."
 },
 {
  "id": 6,
  "exam": "ADsP",
  "topic": "R 인덱싱",
  "q": "R에서 데이터 프레임 `df`의 첫 번째 열을 벡터 형태로 추출하고자 할 때 사용 가능한 코드가 아닌 것은?",
  "opts": [
   "df[, 1]",
   "df[[1]]",
   "df$col1 (첫번째 열 이름이 col1인 경우)",
   "df[1]"
  ],
  "ans": 4,
  "exp": "df[1]은 첫 번째 열을 포함하는 데이터 프레임(Data Frame) 객체를 반환하며, 1차원 벡터 형태가 아닙니다."
 },
 {
  "id": 7,
  "exam": "ADsP",
  "topic": "R 기초 함수",
  "q": "R에서 패키지를 새로 설치하고 해당 패키지를 현재 세션에 로드하는 적절한 순서 및 명령어는?",
  "opts": [
   "install.packages('pkg') → library(pkg)",
   "library(pkg) → install.packages('pkg')",
   "load.packages('pkg') → require(pkg)",
   "import(pkg) → library('pkg')"
  ],
  "ans": 1,
  "exp": "install.packages('패키지명') 명령으로 먼저 설치한 뒤, library(패키지명)으로 사용 라이브러리를 로드합니다."
 },
 {
  "id": 8,
  "exam": "빅데이터분석기사",
  "topic": "R 기초 함수",
  "q": "R에서 객체의 구조(Data structure), 데이터 타입, 각 변수의 값 일부를 요약하여 보여주는 함수는?",
  "opts": [
   "summary()",
   "str()",
   "dim()",
   "mode()"
  ],
  "ans": 2,
  "exp": "str() (structure) 함수는 데이터의 구조, 차원, 변수 타입 및 초기값 샘플을 간결하게 보여줍니다."
 },
 {
  "id": 9,
  "exam": "ADsP",
  "topic": "R 기초 함수",
  "q": "다음 R 코드의 출력 결과로 올바른 것은?\n\nx <- c(1, 2, 3)\ny <- c('a', 'b', 'c')\nz <- c(x, y)",
  "opts": [
   "숫자형 벡터 c(1, 2, 3, NA, NA, NA)",
   "문자형 벡터 c('1', '2', '3', 'a', 'b', 'c')",
   "리스트 형태 [[1]], [[2]]",
   "에러 발생 (서로 다른 데이터 타입 연산 불가)"
  ],
  "ans": 2,
  "exp": "R에서 벡터는 하나의 데이터 타입만 가질 수 있으므로, 숫자와 문자가 섞이면 더 유연한 타입인 문자형(Character)으로 자동 형변환(Coercion)됩니다."
 },
 {
  "id": 10,
  "exam": "ADsP",
  "topic": "R 기초 함수",
  "q": "다음 중 R의 행렬 생성 함수 `matrix(1:6, nrow=2, ncol=3)` 실행 시 기본값(byrow=FALSE) 기준 열 우선 저장 방식의 결과 1행의 값은?",
  "opts": [
   "1, 2, 3",
   "1, 3, 5",
   "1, 4, 6",
   "2, 4, 6"
  ],
  "ans": 2,
  "exp": "열 우선(byrow=FALSE) 채우기 방식이므로 1열에 (1,2), 2열에 (3,4), 3열에 (5,6)이 배치됩니다. 따라서 1행 원소는 (1, 3, 5)입니다."
 },
 {
  "id": 11,
  "exam": "빅데이터분석기사",
  "topic": "R 결측치 처리",
  "q": "R에서 데이터에 포함된 결측값(NA)의 유무를 논리형(TRUE/FALSE)으로 확인하는 함수는?",
  "opts": [
   "isnull()",
   "is.na()",
   "na.check()",
   "has.na()"
  ],
  "ans": 2,
  "exp": "is.na() 함수는 각 원소가 NA 결측치인지 여부를 논리값(TRUE/FALSE) 벡터 또는 데이터 프레임 형태로 반환합니다."
 },
 {
  "id": 12,
  "exam": "ADsP",
  "topic": "R 결측치 처리",
  "q": "R에서 결측치가 포함된 벡터 `v <- c(10, 20, NA, 40)`의 평균을 구할 때 사용해야 하는 올바른 코드 표현은?",
  "opts": [
   "mean(v)",
   "mean(v, na.rm=TRUE)",
   "mean(na.omit(v, remove=TRUE))",
   "avg(v, ignore.na=TRUE)"
  ],
  "ans": 2,
  "exp": "mean() 함수에서 결측치를 제외하고 평균을 계산하려면 `na.rm=TRUE` 옵션을 지정합니다."
 },
 {
  "id": 13,
  "exam": "빅데이터분석기사",
  "topic": "R 결측치 처리",
  "q": "R에서 데이터 프레임 내의 모든 행 중 결측치가 하나라도 포함된 행을 완전히 제거하는 함수는?",
  "opts": [
   "na.omit()",
   "drop.na()",
   "remove.na()",
   "clean.na()"
  ],
  "ans": 1,
  "exp": "na.omit() 함수는 데이터 프레임에서 결측치가 존재하는 모든 행을 삭제(Listwise deletion)하여 반환합니다."
 },
 {
  "id": 14,
  "exam": "ADsP",
  "topic": "R apply 계열",
  "q": "R에서 데이터 프레임 또는 행렬의 '행(Row)' 또는 '열(Column)' 단위로 함수를 반복 적용할 때 사용하는 함수는?",
  "opts": [
   "apply()",
   "lapply()",
   "sapply()",
   "tapply()"
  ],
  "ans": 1,
  "exp": "apply(X, MARGIN, FUN) 함수에서 MARGIN=1은 행 단위, MARGIN=2는 열 단위 연산을 수행합니다."
 },
 {
  "id": 15,
  "exam": "ADsP",
  "topic": "R apply 계열",
  "q": "R에서 리스트(List) 형태의 입력 데이터를 받아 연산한 후, 그 결과를 다시 '리스트(List)' 형태로 반환하는 함수는?",
  "opts": [
   "sapply()",
   "lapply()",
   "tapply()",
   "vapply()"
  ],
  "ans": 2,
  "exp": "lapply()는 입력으로 리스트나 벡터를 받아 함수를 적용하고, 결과로 항상 리스트(List)를 반환합니다."
 },
 {
  "id": 16,
  "exam": "빅데이터분석기사",
  "topic": "R apply 계열",
  "q": "R에서 그룹 범주형 변수를 기준으로 범주별 집계 연산을 수행할 때 가장 적절한 apply 계열 함수는?",
  "opts": [
   "lapply()",
   "sapply()",
   "tapply()",
   "mapply()"
  ],
  "ans": 3,
  "exp": "tapply(X, INDEX, FUN) 함수는 INDEX에 지정된 그룹(범주형 변수)별로 수치형 변수 X에 함수 FUN을 적용합니다."
 },
 {
  "id": 17,
  "exam": "ADsP",
  "topic": "R apply 계열",
  "q": "R의 `sapply()` 함수에 대한 설명으로 가장 올바른 것은?",
  "opts": [
   "항상 행렬만 반환한다.",
   "lapply()와 비슷하나 결과를 벡터나 행렬 형태로 단축(simplify)하여 반환한다.",
   "데이터 프레임의 특정 열만 선택하는 함수이다.",
   "결측치를 자동으로 제거해주는 전처리 함수이다."
  ],
  "ans": 2,
  "exp": "sapply()는 lapply()의 단순화 버전으로, 가능한 경우 연산 결과를 벡터나 행렬로 반환합니다."
 },
 {
  "id": 18,
  "exam": "ADsP",
  "topic": "R 제어문 및 조건문",
  "q": "R에서 조건에 따라 벡터화된 처리(Vectorized operation)를 수행하는 삼항 조건식 대응 함수는?",
  "opts": [
   "if_else_all()",
   "ifelse()",
   "condition()",
   "switch_if()"
  ],
  "ans": 2,
  "exp": "ifelse(test, yes, no) 함수는 조건식 test의 결과를 평가하여 참이면 yes, 거짓이면 no 값을 벡터 단위로 반환합니다."
 },
 {
  "id": 19,
  "exam": "빅데이터분석기사",
  "topic": "R 문자열 처리",
  "q": "R에서 여러 개의 문자열을 하나로 결합(Concatenate)할 때 사용하는 함수는?",
  "opts": [
   "substr()",
   "paste()",
   "grep()",
   "str_split()"
  ],
  "ans": 2,
  "exp": "paste() 및 paste0() 함수는 문자열들을 하나로 이어붙이는 R 내장 함수입니다."
 },
 {
  "id": 20,
  "exam": "ADsP",
  "topic": "R 문자열 처리",
  "q": "R의 `substr('DataScience', 1, 4)` 실행 결과로 올바른 것은?",
  "opts": [
   "'Data'",
   "'Science'",
   "'DataScience'",
   "'D'"
  ],
  "ans": 1,
  "exp": "substr(x, start, stop)은 문자열 x의 start 위치부터 stop 위치까지 부분 문자열을 추출하므로 1번째부터 4번째 문자인 'Data'를 반환합니다."
 },
 {
  "id": 21,
  "exam": "ADsP",
  "topic": "dplyr 데이터 전처리",
  "q": "dplyr 패키지에서 특정 조건에 맞는 행(Row)을 필터링할 때 사용하는 함수는?",
  "opts": [
   "select()",
   "filter()",
   "mutate()",
   "summarise()"
  ],
  "ans": 2,
  "exp": "filter() 함수는 지정한 논리 조건식에 해당하는 행을 추출합니다."
 },
 {
  "id": 22,
  "exam": "ADsP",
  "topic": "dplyr 데이터 전처리",
  "q": "dplyr 패키지에서 특정 열(Column)만을 선택하거나 제외할 때 사용하는 함수는?",
  "opts": [
   "filter()",
   "select()",
   "mutate()",
   "arrange()"
  ],
  "ans": 2,
  "exp": "select() 함수는 분석에 필요한 열을 선택하거나 제거할 때 사용합니다."
 },
 {
  "id": 23,
  "exam": "ADsP",
  "topic": "dplyr 데이터 전처리",
  "q": "dplyr 패키지에서 파이프 연산자(Pipe operator)의 기호로 올바른 것은?",
  "opts": [
   "->>",
   "%>%",
   "||",
   "::"
  ],
  "ans": 2,
  "exp": "%>% 연산자는 앞선 연산의 결과를 다음 함수의 첫 번째 인자로 전달합니다."
 },
 {
  "id": 24,
  "exam": "빅데이터분석기사",
  "topic": "dplyr 데이터 전처리",
  "q": "dplyr 패키지에서 기존 변수를 바탕으로 새로운 변수(열)를 생성할 때 사용하는 함수는?",
  "opts": [
   "mutate()",
   "rename()",
   "transmute_all()",
   "add_row()"
  ],
  "ans": 1,
  "exp": "mutate() 함수는 새로운 가공 변수를 추가할 때 사용됩니다."
 },
 {
  "id": 25,
  "exam": "ADsP",
  "topic": "dplyr 데이터 전처리",
  "q": "dplyr 패키지에서 그룹별 집계 연산을 수행하기 위해 먼저 데이터를 그룹화할 때 사용하는 함수는?",
  "opts": [
   "group_by()",
   "summarise()",
   "arrange()",
   "distinct()"
  ],
  "ans": 1,
  "exp": "group_by() 함수는 데이터를 지정된 열의 범주별로 그룹화합니다."
 },
 {
  "id": 26,
  "exam": "ADsP",
  "topic": "dplyr 데이터 전처리",
  "q": "dplyr 패키지에서 특정 기준 변수에 따라 데이터를 정렬할 때 사용하는 함수는?",
  "opts": [
   "sort()",
   "order()",
   "arrange()",
   "rank()"
  ],
  "ans": 3,
  "exp": "arrange() 함수는 기본 오름차순, desc()와 함께 사용하여 내림차순 정렬을 수행합니다."
 },
 {
  "id": 27,
  "exam": "빅데이터분석기사",
  "topic": "reshape2 데이터 변환",
  "q": "reshape2 패키지에서 Wide Format(식별자-변수 형태) 데이터를 Long Format(variable-value 구조)으로 재구조화하는 함수는?",
  "opts": [
   "dcast()",
   "acast()",
   "melt()",
   "gather_all()"
  ],
  "ans": 3,
  "exp": "melt() 함수는 가로로 넓은 Wide 데이터를 세로로 긴 Long 형태 데이터로 변환합니다."
 },
 {
  "id": 28,
  "exam": "ADsP",
  "topic": "reshape2 데이터 변환",
  "q": "reshape2 패키지에서 Long Format 데이터를 다시 요약 집계표 형태인 Wide Format 데이터 프레임으로 변환하는 함수는?",
  "opts": [
   "melt()",
   "dcast()",
   "spread_out()",
   "cast_list()"
  ],
  "ans": 2,
  "exp": "dcast() 함수는 Long Format 데이터를 데이터 프레임 형태의 Wide Format으로 변환합니다."
 },
 {
  "id": 29,
  "exam": "ADsP",
  "topic": "R 데이터 수집/입출력",
  "q": "R에서 외부 CSV 파일 데이터를 읽어와 데이터 프레임으로 생성할 때 기본적으로 사용되는 내장 함수는?",
  "opts": [
   "read.csv()",
   "load.csv()",
   "import.csv()",
   "open.csv()"
  ],
  "ans": 1,
  "exp": "read.csv()는 쉼표로 구분된 파일 데이터를 읽는 R 내장 입출력 함수입니다."
 },
 {
  "id": 30,
  "exam": "빅데이터분석기사",
  "topic": "R 데이터 수집/입출력",
  "q": "R에서 큰 용량의 데이터를 매우 빠른 속도로 읽어오기 위해 사용하는 `data.table` 패키지의 함수는?",
  "opts": [
   "read.table()",
   "fread()",
   "quick_read()",
   "fast_csv()"
  ],
  "ans": 2,
  "exp": "data.table 패키지의 fread() 함수는 대용량 파일 입출력에 매우 유용합니다."
 },
 {
  "id": 31,
  "exam": "ADsP",
  "topic": "R 기술통계",
  "q": "R에서 데이터의 5수치 요약(최소값, 1분위수, 중앙값, 3분위수, 최대값)과 평균을 동시에 출력해주는 요약 함수는?",
  "opts": [
   "summary()",
   "quantile()",
   "fivenum()",
   "describe()"
  ],
  "ans": 1,
  "exp": "summary() 함수는 수치형 데이터의 주요 기술통계량과 평균을 출력합니다."
 },
 {
  "id": 32,
  "exam": "ADsP",
  "topic": "R 기술통계",
  "q": "R에서 사분위수 범위(IQR, Interquartile Range)를 계산하는 함수는?",
  "opts": [
   "IQR()",
   "quantile_range()",
   "range_iqr()",
   "diff_q()"
  ],
  "ans": 1,
  "exp": "IQR() 함수는 3분위수(Q3)에서 1분위수(Q1)를 뺀 값인 Q3 - Q1을 계산합니다."
 },
 {
  "id": 33,
  "exam": "빅데이터분석기사",
  "topic": "R 시각화",
  "q": "R의 기본 그래픽 패키지에서 수치형 데이터의 분포 형태와 빈도를 기둥 모양으로 나타내는 그래픽 함수는?",
  "opts": [
   "plot()",
   "barplot()",
   "hist()",
   "boxplot()"
  ],
  "ans": 3,
  "exp": "hist() 함수는 연속형 데이터의 히스토그램을 작성합니다."
 },
 {
  "id": 34,
  "exam": "ADsP",
  "topic": "R 시각화",
  "q": "R에서 데이터의 중앙값, 사분위수 및 이상치(Outlier) 존재 여부를 시각적으로 확인하기 가장 적절한 그래프는?",
  "opts": [
   "Pie Chart",
   "Boxplot (상자수염그림)",
   "Scatter Plot",
   "Line Chart"
  ],
  "ans": 2,
  "exp": "Boxplot은 최솟값, Q1, 중앙값, Q3, 최댓값 및 이상치를 한눈에 파악할 수 있는 시각화 도구입니다."
 },
 {
  "id": 35,
  "exam": "ADsP",
  "topic": "R 시각화",
  "q": "R의 `ggplot2` 패키지에서 산점도(Scatter plot) 기하학적 객체를 생성하는 지옴(geom) 함수는?",
  "opts": [
   "geom_line()",
   "geom_point()",
   "geom_bar()",
   "geom_histogram()"
  ],
  "ans": 2,
  "exp": "geom_point() 함수는 두 수치형 변수 간 산점도를 생성합니다."
 },
 {
  "id": 36,
  "exam": "빅데이터분석기사",
  "topic": "R 시각화",
  "q": "R의 `ggplot2` 패키지 문법 구조 중 데이터와 시각적 요소(X축, Y축, 색상, 모양 등)를 매핑하는 설정 함수는?",
  "opts": [
   "theme()",
   "aes()",
   "facet_wrap()",
   "coord_flip()"
  ],
  "ans": 2,
  "exp": "aes() (Aesthetic mappings) 함수는 변수와 그래프의 시각적 속성을 연결합니다."
 },
 {
  "id": 37,
  "exam": "ADsP",
  "topic": "R 상관분석",
  "q": "R에서 두 연속형 변수 간의 피어슨 상관계수를 계산하는 함수는?",
  "opts": [
   "cov()",
   "cor()",
   "cor.test()",
   "reg()"
  ],
  "ans": 2,
  "exp": "cor() 함수는 상관계수를 계산하며, cor.test()는 상관계수의 통계적 유의성 검정을 수행합니다."
 },
 {
  "id": 38,
  "exam": "ADsP",
  "topic": "R 가설검정",
  "q": "R에서 두 집단의 평균 차이가 통계적으로 유의한지 검정할 때 사용하는 t-검정 함수는?",
  "opts": [
   "z.test()",
   "t.test()",
   "f.test()",
   "anova()"
  ],
  "ans": 2,
  "exp": "t.test() 함수는 단일집단, 독립두집단, 대응두집단 t-검정을 수행합니다."
 },
 {
  "id": 39,
  "exam": "빅데이터분석기사",
  "topic": "R 가설검정",
  "q": "R에서 세 개 이상의 집단 간 평균 차이를 비교하기 위한 일원배치 분산분석(ANOVA) 함수는?",
  "opts": [
   "aov()",
   "var.test()",
   "chisq.test()",
   "mda()"
  ],
  "ans": 1,
  "exp": "aov() 함수는 분산분석(Analysis of Variance) 모형을 생성합니다."
 },
 {
  "id": 40,
  "exam": "ADsP",
  "topic": "R 가설검정",
  "q": "R에서 범주형 변수 간의 독립성 검정이나 적합도 검정을 수행하는 교차분석 함수는?",
  "opts": [
   "chisq.test()",
   "t.test()",
   "ks.test()",
   "shapiro.test()"
  ],
  "ans": 1,
  "exp": "chisq.test() 함수는 카이제곱 검정을 수행합니다."
 },
 {
  "id": 41,
  "exam": "ADsP",
  "topic": "R 회귀분석",
  "q": "R에서 선형회귀분석(Linear Regression Model)을 적합할 때 사용하는 기본 함수는?",
  "opts": [
   "lm()",
   "glm()",
   "rlm()",
   "linear()"
  ],
  "ans": 1,
  "exp": "lm() (Linear Model) 함수는 단순 및 다중 선형회귀 모형 구축에 사용됩니다."
 },
 {
  "id": 42,
  "exam": "ADsP",
  "topic": "R 회귀분석",
  "q": "R에서 반응변수가 이분형(0 또는 1) 범주일 때 로지스틱 회귀분석을 적합하기 위해 사용하는 함수와 옵션은?",
  "opts": [
   "lm(..., family='logistic')",
   "glm(..., family=binomial)",
   "glm(..., family=gaussian)",
   "logit(..., type='binary')"
  ],
  "ans": 2,
  "exp": "glm() 함수에서 family=binomial 옵션을 지정하여 로지스틱 회귀분석을 수행합니다."
 },
 {
  "id": 43,
  "exam": "빅데이터분석기사",
  "topic": "R 회귀분석",
  "q": "R의 선형회귀 모형 요약 결과 `summary(lm_model)`에서 모형 전체의 통계적 유의성을 검정하는 통계량은?",
  "opts": [
   "t-statistic",
   "F-statistic",
   "Chi-square statistic",
   "Durbin-Watson statistic"
  ],
  "ans": 2,
  "exp": "F-통계량(F-statistic)과 관련 p-value를 통해 회귀모형 전체의 통계적 유의성을 확인합니다."
 },
 {
  "id": 44,
  "exam": "ADsP",
  "topic": "R 회귀분석",
  "q": "R 회귀모형 결과에서 독립변수가 종속변수의 변동을 얼마나 설명하는지 나타내는 지표는?",
  "opts": [
   "자유도 (df)",
   "결정계수 (R-squared)",
   "잔차 표준오차 (RSE)",
   "F-통계량"
  ],
  "ans": 2,
  "exp": "결정계수(R-squared)는 회귀식의 설명력을 나타내며 0과 1 사이의 값을 가집니다."
 },
 {
  "id": 45,
  "exam": "ADsP",
  "topic": "R 회귀분석",
  "q": "R에서 회귀모형의 다중공선성(Multicollinearity) 존재 여부를 평가하기 위한 분산팽창요인 지표 및 함수는?",
  "opts": [
   "AIC()",
   "VIF (car 패키지의 vif())",
   "DWtest()",
   "Cooks.distance()"
  ],
  "ans": 2,
  "exp": "car 패키지의 vif() 함수로 VIF 값을 구하며, 보통 10 이상이면 다중공선성이 존재하는 것으로 판단합니다."
 },
 {
  "id": 46,
  "exam": "빅데이터분석기사",
  "topic": "R 회귀분석",
  "q": "R에서 구축된 모델을 이용하여 새로운 데이터셋에 대한 예측값을 산출하는 함수는?",
  "opts": [
   "predict()",
   "forecast()",
   "estimate()",
   "fitted_values()"
  ],
  "ans": 1,
  "exp": "predict(object, newdata) 함수는 적합된 모형을 바탕으로 새로운 데이터의 예측값을 계산합니다."
 },
 {
  "id": 47,
  "exam": "ADsP",
  "topic": "R 변수선택법",
  "q": "R에서 회귀 모형의 변수 선택 시 AIC(Akaike Information Criterion) 기준 단계적 변수 선택을 수행하는 함수는?",
  "opts": [
   "step()",
   "select_var()",
   "best_model()",
   "opt_reg()"
  ],
  "ans": 1,
  "exp": "step() 함수는 forward, backward, stepwise 방향으로 변수를 자동 선택합니다."
 },
 {
  "id": 48,
  "exam": "ADsP",
  "topic": "R 모형 진단",
  "q": "R에서 회귀모형의 잔차(Residual) 분석 시 오차의 독립성을 검정하기 위해 사용하는 테스트는?",
  "opts": [
   "Shapiro-Wilk test",
   "Durbin-Watson test (dwtest)",
   "Student t-test",
   "Levene test"
  ],
  "ans": 2,
  "exp": "Durbin-Watson 검정은 잔차의 자기상관(Autocorrelation) 유무를 확인합니다."
 },
 {
  "id": 49,
  "exam": "빅데이터분석기사",
  "topic": "R 모형 진단",
  "q": "R에서 데이터의 정규성(Normality) 여부를 검정하기 위해 가장 대표적으로 사용되는 통계적 검정 함수는?",
  "opts": [
   "shapiro.test()",
   "var.test()",
   "cor.test()",
   "bartlett.test()"
  ],
  "ans": 1,
  "exp": "shapiro.test() 함수는 샤피로-윌크 정규성 검정을 수행합니다."
 },
 {
  "id": 50,
  "exam": "ADsP",
  "topic": "R 의사결정나무",
  "q": "R의 `rpart` 패키지에서 의사결정나무(Decision Tree) 모형을 생성하는 함수는?",
  "opts": [
   "tree()",
   "rpart()",
   "ctree()",
   "dtree()"
  ],
  "ans": 2,
  "exp": "rpart 패키지의 rpart() 함수는 CART 알고리즘 기반 의사결정나무를 생성합니다."
 },
 {
  "id": 51,
  "exam": "ADsP",
  "topic": "R 의사결정나무",
  "q": "R의 `party` 패키지에서 과적합을 방지하고 조건부 추론을 기반으로 트리를 분할하는 분류 함수는?",
  "opts": [
   "ctree()",
   "rpart()",
   "randomForest()",
   "xgboost()"
  ],
  "ans": 1,
  "exp": "party 패키지의 ctree() 함수는 조건부 추론 나무(Conditional Inference Tree)를 생성합니다."
 },
 {
  "id": 52,
  "exam": "빅데이터분석기사",
  "topic": "R 앙상블 모형",
  "q": "R에서 배깅(Bagging) 개념에 무작위 변수 선택 과정을 추가한 대표적인 앙상블 머신러닝 패키지/함수는?",
  "opts": [
   "adaboost()",
   "randomForest()",
   "svm()",
   "knn()"
  ],
  "ans": 2,
  "exp": "randomForest 패키지의 randomForest() 함수는 여러 의사결정나무를 결합하는 대표적 앙상블 기법입니다."
 },
 {
  "id": 53,
  "exam": "ADsP",
  "topic": "R 군집분석",
  "q": "R에서 비계층적 군집분석인 K-평균 군집화(K-means Clustering)를 수행하는 내장 함수는?",
  "opts": [
   "kmeans()",
   "hclust()",
   "pam()",
   "dbscan()"
  ],
  "ans": 1,
  "exp": "kmeans(x, centers) 함수는 K-평균 군집분석을 수행합니다."
 },
 {
  "id": 54,
  "exam": "ADsP",
  "topic": "R 군집분석",
  "q": "R에서 객체 간 거리를 측정하기 위해 사용하는 함수로 Euclidean, Manhattan 거리 등을 지원하는 함수는?",
  "opts": [
   "dist()",
   "distance()",
   "calc_dist()",
   "cdist()"
  ],
  "ans": 1,
  "exp": "dist() 함수는 행렬이나 데이터 프레임 행 간의 거리 행렬을 계산합니다."
 },
 {
  "id": 55,
  "exam": "ADsP",
  "topic": "R 군집분석",
  "q": "R의 `dist()` 함수에서 기본(Default)으로 제공하는 거리 측정 방법은?",
  "opts": [
   "manhattan",
   "euclidean",
   "minkowski",
   "canberra"
  ],
  "ans": 2,
  "exp": "dist() 함수의 method 인자 기본값은 'euclidean' (유클리드 거리)입니다."
 },
 {
  "id": 56,
  "exam": "빅데이터분석기사",
  "topic": "R 군집분석",
  "q": "R에서 계산된 거리 행렬을 바탕으로 계층적 군집분석(Hierarchical Clustering)을 수행하는 함수는?",
  "opts": [
   "hclust()",
   "kmeans()",
   "cutree()",
   "dendrogram()"
  ],
  "ans": 1,
  "exp": "hclust(d, method) 함수는 최단연결법, 최장연결법, 와드연결법 등의 계층적 군집을 생성합니다."
 },
 {
  "id": 57,
  "exam": "ADsP",
  "topic": "R 군집분석",
  "q": "R에서 계층적 군집분석 결과인 덴드로그램(Dendrogram)을 지정한 군집 수(k)만큼 잘라 군집 라벨을 얻는 함수는?",
  "opts": [
   "cutree()",
   "split_tree()",
   "tree_k()",
   "hcut()"
  ],
  "ans": 1,
  "exp": "cutree(hclust_obj, k=3) 형태로 군집을 나눕니다."
 },
 {
  "id": 58,
  "exam": "ADsP",
  "topic": "R 차원축소",
  "q": "R에서 수치형 데이터의 주성분 분석(PCA, Principal Component Analysis)을 수행하는 기본 함수는?",
  "opts": [
   "prcomp() 및 princomp()",
   "factoranal()",
   "mds()",
   "lda()"
  ],
  "ans": 1,
  "exp": "prcomp()와 princomp() 함수는 주성분 분석을 위해 사용됩니다."
 },
 {
  "id": 59,
  "exam": "빅데이터분석기사",
  "topic": "R 주성분분석",
  "q": "R 주성분 분석 결과에서 누적 기여율(Cumulative Proportion)이 얼마 이상이 되는 지점까지 주성분을 선택하는가?",
  "opts": [
   "약 10~20%",
   "약 70~80%",
   "무조건 100%",
   "50% 미만"
  ],
  "ans": 2,
  "exp": "일반적으로 누적 설명력(기여율)이 70~80% 이상이 되도록 주성분의 개수를 결정합니다."
 },
 {
  "id": 60,
  "exam": "ADsP",
  "topic": "R 연관분석",
  "q": "R에서 연관성 분석(Association Rules / Apriori 알고리즘)을 수행할 때 가장 대표적으로 사용되는 패키지는?",
  "opts": [
   "arules",
   "e1071",
   "caret",
   "ROCR"
  ],
  "ans": 1,
  "exp": "arules 패키지의 apriori() 함수를 이용하여 연관규칙을 도출합니다."
 },
 {
  "id": 61,
  "exam": "ADsP",
  "topic": "R 연관분석",
  "q": "R의 `arules` 패키지 연관규칙 평가 지표 중 항목 A가 구매될 때 항목 B가 구매될 확률을 의미하는 지표는?",
  "opts": [
   "Support (지지도)",
   "Confidence (신뢰도)",
   "Lift (향상도)",
   "Leverage"
  ],
  "ans": 2,
  "exp": "신뢰도(Confidence)는 P(B|A) = P(A∩B) / P(A) 로 계산됩니다."
 },
 {
  "id": 62,
  "exam": "ADsP",
  "topic": "R 연관분석",
  "q": "R 연관규칙에서 향상도(Lift) 값이 1보다 클 때 의미하는 바는?",
  "opts": [
   "A와 B는 서로 독립이다.",
   "A를 구매한 고객이 B도 구매할 가능성이 상호 긍정적 연관성을 갖는다.",
   "A와 B는 음의 상관관계를 갖는다.",
   "규칙의 유용성이 전혀 없다."
  ],
  "ans": 2,
  "exp": "Lift > 1 이면 품목 A와 B 사이에 양의 연관성이 존재함을 의미합니다."
 },
 {
  "id": 63,
  "exam": "빅데이터분석기사",
  "topic": "R 시계열 분석",
  "q": "R에서 시계열 객체(Time Series Object)를 생성할 때 사용하는 함수는?",
  "opts": [
   "ts()",
   "time()",
   "as.series()",
   "chron()"
  ],
  "ans": 1,
  "exp": "ts(data, start, frequency) 함수는 시계열 데이터 객체를 정의합니다."
 },
 {
  "id": 64,
  "exam": "ADsP",
  "topic": "R 시계열 분석",
  "q": "R에서 ARIMA(AutoRegressive Integrated Moving Average) 시계열 모형을 자동으로 탐색 및 적합하는 forecast 패키지의 함수는?",
  "opts": [
   "auto.arima()",
   "fit.arima()",
   "arima.sim()",
   "ts_model()"
  ],
  "ans": 1,
  "exp": "forecast 패키지의 auto.arima() 함수는 최적의 p, d, q 차수를 자동 탐색하여 모형을 적합합니다."
 },
 {
  "id": 65,
  "exam": "ADsP",
  "topic": "R 분류 모형 평가",
  "q": "R에서 분류 모형의 혼동행렬(Confusion Matrix)과 정확도, 민감도, 특이도 등을 종합 계산해주는 `caret` 패키지 함수는?",
  "opts": [
   "confusionMatrix()",
   "eval_model()",
   "roc_curve()",
   "score_matrix()"
  ],
  "ans": 1,
  "exp": "caret 패키지의 confusionMatrix() 함수는 평가 지표를 상세히 제공합니다."
 },
 {
  "id": 66,
  "exam": "빅데이터분석기사",
  "topic": "R 분류 모형 평가",
  "q": "R에서 ROC 커브 하단 면적인 AUC(Area Under the Curve) 값을 계산하거나 그래프를 그릴 때 주로 사용하는 패키지는?",
  "opts": [
   "ROCR 또는 pROC",
   "ggplot2",
   "dplyr",
   "gridExtra"
  ],
  "ans": 1,
  "exp": "ROCR, pROC 패키지는 ROC 커브 그리기 및 AUC 산출에 주로 활용됩니다."
 },
 {
  "id": 67,
  "exam": "ADsP",
  "topic": "R 서포트 벡터 머신",
  "q": "R의 `e1071` 패키지에서 서포트 벡터 머신(SVM, Support Vector Machine) 분류기를 학습시키는 함수는?",
  "opts": [
   "svm()",
   "ksvm()",
   "svm_fit()",
   "linear_svm()"
  ],
  "ans": 1,
  "exp": "e1071 패키지의 svm() 함수는 classification 및 regression SVM을 수행합니다."
 },
 {
  "id": 68,
  "exam": "ADsP",
  "topic": "R Naive Bayes",
  "q": "R의 `e1071` 패키지에서 베이즈 정리를 이용한 나이브 베이즈 분류 모형을 생성하는 함수는?",
  "opts": [
   "naiveBayes()",
   "bayes_class()",
   "nb()",
   "prior_bayes()"
  ],
  "ans": 1,
  "exp": "e1071 패키지의 naiveBayes() 함수를 사용합니다."
 },
 {
  "id": 69,
  "exam": "빅데이터분석기사",
  "topic": "R 신경망 모형",
  "q": "R의 `nnet` 패키지에서 인공신경망(Artificial Neural Network) 모형을 적합할 때 사용하는 함수는?",
  "opts": [
   "nnet()",
   "neuralnet()",
   "ann()",
   "deepnet()"
  ],
  "ans": 1,
  "exp": "nnet 패키지의 nnet() 함수는 단층 은닉층을 가진 인공신경망을 학습시킵니다."
 },
 {
  "id": 70,
  "exam": "ADsP",
  "topic": "R 텍스트 마이닝",
  "q": "R에서 텍스트 마이닝을 수행하기 위한 대표적인 패키지로 말뭉치(Corpus) 생성 및 단어문서행렬(TDM) 작성을 지원하는 것은?",
  "opts": [
   "tm",
   "textclean",
   "KoNLP",
   "tidytext"
  ],
  "ans": 1,
  "exp": "tm 패키지는 R의 대표적인 텍스트 마이닝 패키지입니다."
 },
 {
  "id": 71,
  "exam": "ADsP",
  "topic": "R 텍스트 마이닝",
  "q": "R의 `tm` 패키지에서 문장 내 불용어(Stopwords) 제거, 공백 제거, 소문자 변환 등 전처리를 다수의 문서에 일괄 적용하는 함수는?",
  "opts": [
   "tm_map()",
   "text_filter()",
   "clean_text()",
   "corpus_apply()"
  ],
  "ans": 1,
  "exp": "tm_map(corpus, FUN) 함수를 통해 말뭉치 데이터의 전처리를 일괄 실행합니다."
 },
 {
  "id": 72,
  "exam": "빅데이터분석기사",
  "topic": "R 실기 전처리",
  "q": "R에서 벡터나 데이터 프레임 내의 중복된 값을 제거하고 유일한(Unique) 원소들만 남기는 함수는?",
  "opts": [
   "unique()",
   "distinct_all()",
   "dedup()",
   "single()"
  ],
  "ans": 1,
  "exp": "unique() 함수는 중복 원소를 제거합니다."
 },
 {
  "id": 73,
  "exam": "ADsP",
  "topic": "R 실기 전처리",
  "q": "R에서 데이터 프레임의 행 또는 열의 이름을 변경하거나 확인할 때 사용하는 함수로 올바르지 않은 것은?",
  "opts": [
   "names()",
   "colnames()",
   "rownames()",
   "set_title()"
  ],
  "ans": 4,
  "exp": "set_title()은 R의 기본 행/열 이름 설정 함수가 아닙니다."
 },
 {
  "id": 74,
  "exam": "ADsP",
  "topic": "R 실기 전처리",
  "q": "R에서 수치형 데이터 `x`를 정수형 위치 순위로 변환하는 함수는?",
  "opts": [
   "rank()",
   "order()",
   "sort()",
   "arrange()"
  ],
  "ans": 1,
  "exp": "rank() 함수는 데이터 각 원소의 순위를 반환합니다."
 },
 {
  "id": 75,
  "exam": "빅데이터분석기사",
  "topic": "R 실기 전처리",
  "q": "R에서 주어진 벡터의 오름차순 정렬된 '인덱스(Index) 위치'를 반환하여 데이터 정렬에 유용하게 쓰이는 함수는?",
  "opts": [
   "order()",
   "sort()",
   "rank()",
   "index_sort()"
  ],
  "ans": 1,
  "exp": "order() 함수는 정렬된 원소들의 원래 인덱스 위치 벡터를 반환합니다."
 },
 {
  "id": 76,
  "exam": "ADsP",
  "topic": "R 날짜 및 시간",
  "q": "R에서 문자열 형태로 된 날짜 데이터('2024-05-10')를 Date 클래스 객체로 변환하는 기본 함수는?",
  "opts": [
   "as.Date()",
   "to_date()",
   "parse_date()",
   "date_format()"
  ],
  "ans": 1,
  "exp": "as.Date() 함수는 문자열을 R의 Date 타임 객체로 형변환합니다."
 },
 {
  "id": 77,
  "exam": "ADsP",
  "topic": "R 날짜 및 시간",
  "q": "R에서 두 날짜 객체간의 차이(일수, 시간 등)를 계산하여 반환하는 함수는?",
  "opts": [
   "difftime()",
   "date_diff()",
   "sub_date()",
   "time_gap()"
  ],
  "ans": 1,
  "exp": "difftime(time1, time2, units='days') 형태로 시간 차이를 계산합니다."
 },
 {
  "id": 78,
  "exam": "빅데이터분석기사",
  "topic": "R 실기 작업형 1유형",
  "q": "빅데이터분석기사 R 실기 제1유형에서 특정 열의 이상치를 IQR 방식으로 판단할 때, 상한선(Upper Bound)의 기준 공식은?",
  "opts": [
   "Q3 + 1.5 * IQR",
   "Q3 + 3.0 * IQR",
   "Q1 - 1.5 * IQR",
   "Mean + 2 * SD"
  ],
  "ans": 1,
  "exp": "이상치 상한 기준은 Q3 + 1.5 * IQR 입니다."
 },
 {
  "id": 79,
  "exam": "빅데이터분석기사",
  "topic": "R 실기 작업형 1유형",
  "q": "빅데이터분석기사 R 실기 제1유형에서 특정 열의 이상치를 IQR 방식으로 판단할 때, 하한선(Lower Bound)의 기준 공식은?",
  "opts": [
   "Q1 - 1.5 * IQR",
   "Q1 - 3.0 * IQR",
   "Q3 + 1.5 * IQR",
   "Mean - 2 * SD"
  ],
  "ans": 1,
  "exp": "이상치 하한 기준은 Q1 - 1.5 * IQR 입니다."
 },
 {
  "id": 80,
  "exam": "ADsP",
  "topic": "R 데이터 구조 변환",
  "q": "R에서 데이터 프레임을 행렬(Matrix) 구조로 변환할 때 사용하는 형변환 함수는?",
  "opts": [
   "as.matrix()",
   "to.matrix()",
   "convert.matrix()",
   "make.matrix()"
  ],
  "ans": 1,
  "exp": "as.matrix() 함수를 사용하여 데이터 프레임을 행렬로 변환합니다."
 },
 {
  "id": 81,
  "exam": "ADsP",
  "topic": "R 데이터 구조 변환",
  "q": "R에서 리스트(List) 구조의 데이터를 해제하여 하나의 벡터로 만드는 함수는?",
  "opts": [
   "unlist()",
   "flat()",
   "de_list()",
   "vectorize()"
  ],
  "ans": 1,
  "exp": "unlist() 함수는 리스트의 원소들을 단일 벡터 형태로 펼쳐줍니다."
 },
 {
  "id": 82,
  "exam": "빅데이터분석기사",
  "topic": "R 실기 작업형 3유형",
  "q": "빅데이터분석기사 R 실기 제3유형 가설검정에서 귀무가설(H0)을 기각하기 위한 조건으로 올바른 것은? (유의수준 alpha)",
  "opts": [
   "p-value < alpha",
   "p-value > alpha",
   "p-value == 1",
   "p-value > 0.5"
  ],
  "ans": 1,
  "exp": "p-value(유의확률)가 지정된 유의수준(alpha, 예: 0.05)보다 작으면 귀무가설을 기각합니다."
 },
 {
  "id": 83,
  "exam": "ADsP",
  "topic": "R 표본추출",
  "q": "R에서 비복원 또는 복원 추출로 임의의 표본(Sample)을 추출하는 함수는?",
  "opts": [
   "sample()",
   "random()",
   "draw()",
   "select_sample()"
  ],
  "ans": 1,
  "exp": "sample(x, size, replace=FALSE) 함수를 사용하여 무작위 표본을 추출합니다."
 },
 {
  "id": 84,
  "exam": "ADsP",
  "topic": "R 표본추출",
  "q": "R에서 난수 생성 결과를 재현 가능(Reproducible)하도록 난수 씨앗을 고정하는 함수는?",
  "opts": [
   "set.seed()",
   "fix.seed()",
   "init.random()",
   "seed.lock()"
  ],
  "ans": 1,
  "exp": "set.seed(숫자) 함수를 통해 동일한 난수 발생 결과를 보장할 수 있습니다."
 },
 {
  "id": 85,
  "exam": "빅데이터분석기사",
  "topic": "R 확률분포",
  "q": "R에서 정규분포(Normal Distribution)의 확률밀도함수(PDF) 값을 계산하는 함수는?",
  "opts": [
   "dnorm()",
   "pnorm()",
   "qnorm()",
   "rnorm()"
  ],
  "ans": 1,
  "exp": "d-밀도(dnorm), p-누적확률(pnorm), q-분위수(qnorm), r-난수생성(rnorm) 입니다."
 },
 {
  "id": 86,
  "exam": "빅데이터분석기사",
  "topic": "R 확률분포",
  "q": "R에서 정규분포로부터 N개의 무작위 난수를 생성하는 함수는?",
  "opts": [
   "rnorm()",
   "dnorm()",
   "pnorm()",
   "qnorm()"
  ],
  "ans": 1,
  "exp": "rnorm(n, mean, sd) 함수는 정규분포를 따르는 난수를 생성합니다."
 },
 {
  "id": 87,
  "exam": "ADsP",
  "topic": "R 모형 평가 지표",
  "q": "R 회귀모형 평가 지표 중 실제값과 예측값 차이의 제곱의 평균에 루트를 씌운 지표는?",
  "opts": [
   "RMSE (Root Mean Squared Error)",
   "MAE (Mean Absolute Error)",
   "MAPE",
   "MSE"
  ],
  "ans": 1,
  "exp": "RMSE는 평균제곱오차(MSE)에 제곱근을 취한 값으로 오차의 단위를 원본과 맞춘 지표입니다."
 },
 {
  "id": 88,
  "exam": "ADsP",
  "topic": "R 모형 평가 지표",
  "q": "R 분류모형 평가에서 실제 Positive인 것 중 모형이 Positive로 올바르게 예측한 비율을 의미하는 지표는?",
  "opts": [
   "Recall (재현율) 또는 Sensitivity (민감도)",
   "Precision (정밀도)",
   "Specificity (특이도)",
   "Accuracy (정확도)"
  ],
  "ans": 1,
  "exp": "재현율(Recall) = TP / (TP + FN) 이며 민감도(Sensitivity)라고도 합니다."
 },
 {
  "id": 89,
  "exam": "빅데이터분석기사",
  "topic": "R 모형 평가 지표",
  "q": "R 분류모형 평가에서 실제 Negative인 것 중 모형이 Negative로 올바르게 예측한 비율을 의미하는 지표는?",
  "opts": [
   "Specificity (특이도)",
   "Sensitivity (민감도)",
   "Precision (정밀도)",
   "Recall (재현율)"
  ],
  "ans": 1,
  "exp": "특이도(Specificity) = TN / (TN + FP) 입니다."
 },
 {
  "id": 90,
  "exam": "ADsP",
  "topic": "R 모형 평가 지표",
  "q": "R 분류모형에서 Precision(정밀도)과 Recall(재현율)의 조화평균으로 계산되는 종합 평가 지표는?",
  "opts": [
   "F1-Score",
   "ROC-AUC",
   "G-mean",
   "Kappa statistic"
  ],
  "ans": 1,
  "exp": "F1-Score = 2 * (Precision * Recall) / (Precision + Recall) 입니다."
 },
 {
  "id": 91,
  "exam": "ADsP",
  "topic": "R 군집분석 거리",
  "q": "R의 `dist()` 함수에서 두 벡터의 각 원소 차이의 절대값의 합으로 계산되는 거리 유형은?",
  "opts": [
   "manhattan (맨하탄 거리)",
   "euclidean (유클리드 거리)",
   "minkowski (민코프스키 거리)",
   "canberra (캔버라 거리)"
  ],
  "ans": 1,
  "exp": "맨하탄 거리는 L1 norm으로 각 변수 차이의 절대값을 합산한 거리입니다."
 },
 {
  "id": 92,
  "exam": "ADsP",
  "topic": "R 군집분석 연결법",
  "q": "R 계층적 군집분석(`hclust`) 중 두 군집 간의 모든 쌍의 거리 중 '최댓값'을 군집 간 거리로 정의하는 방식은?",
  "opts": [
   "최장연결법 (Complete Linkage)",
   "최단연결법 (Single Linkage)",
   "평균연결법 (Average Linkage)",
   "와드연결법 (Ward's Method)"
  ],
  "ans": 1,
  "exp": "최장연결법(완전연결법)은 두 군집 간 가장 먼 거리를 기준으로 측정합니다."
 },
 {
  "id": 93,
  "exam": "빅데이터분석기사",
  "topic": "R 군집분석 연결법",
  "q": "R 계층적 군집분석(`hclust`) 중 군집 내 오차제곱합(ESS)의 증가량을 최소화하는 방향으로 군집을 병합하는 방식은?",
  "opts": [
   "와드연결법 (Ward's Method)",
   "최단연결법",
   "최장연결법",
   "중앙값연결법"
  ],
  "ans": 1,
  "exp": "와드연결법(Ward's method)은 군집 내부의 분산을 최소화하는 방식입니다."
 },
 {
  "id": 94,
  "exam": "ADsP",
  "topic": "R 최신 기출 복원",
  "q": "다음 R 코드의 실행 결과 데이터 타입으로 올바른 것은?\n\nx <- factor(c('A', 'B', 'A', 'C'))\nclass(x)",
  "opts": [
   "factor",
   "character",
   "numeric",
   "matrix"
  ],
  "ans": 1,
  "exp": "factor() 함수로 생성된 변수의 class() 결과는 'factor' 입니다."
 },
 {
  "id": 95,
  "exam": "ADsP",
  "topic": "R 최신 기출 복원",
  "q": "다음 R 코드의 출력 결과로 올바른 것은?\n\nx <- c(1, 2, 3)\nnames(x) <- c('a', 'b', 'c')\nx['b']",
  "opts": [
   "2 (이름이 b인 원소의 값)",
   "1",
   "3",
   "NA"
  ],
  "ans": 1,
  "exp": "R에서는 벡터 원소에 이름을 부여한 후 해당 이름(문자열 인덱스)으로 접근할 수 있으며 x['b']는 2를 반환합니다."
 },
 {
  "id": 96,
  "exam": "빅데이터분석기사",
  "topic": "R 최신 기출 복원",
  "q": "R에서 변수 간의 상관계수 행렬을 계산할 때 결측치가 있는 경우 행 단위 전체 삭제 옵션 설정 인자는?",
  "opts": [
   "cor(x, use='complete.obs')",
   "cor(x, na.rm=TRUE)",
   "cor(x, ignore.na=TRUE)",
   "cor(x, drop.na=TRUE)"
  ],
  "ans": 1,
  "exp": "cor() 함수에서 결측치를 처리할 때는 `use='complete.obs'` 옵션을 사용합니다."
 },
 {
  "id": 97,
  "exam": "ADsP",
  "topic": "R 최신 기출 복원",
  "q": "R에서 2차원 테이블 형태 데이터의 행과 열을 서로 바꿀 때(전치행렬 생성) 사용하는 함수는?",
  "opts": [
   "t()",
   "transpose()",
   "switch_dim()",
   "flip()"
  ],
  "ans": 1,
  "exp": "t() 함수는 행렬이나 데이터 프레임의 전치(Transpose) 행렬을 생성합니다."
 },
 {
  "id": 98,
  "exam": "ADsP",
  "topic": "R 최신 기출 복원",
  "q": "R에서 데이터 프레임의 특정 열 값이 NA인 데이터만 필터링하는 코드 표현으로 올바른 것은?",
  "opts": [
   "df[is.na(df$col), ]",
   "df[df$col == NA, ]",
   "df[isnull(df$col), ]",
   "df[df$col == 'NA', ]"
  ],
  "ans": 1,
  "exp": "R에서 NA 비교는 `== NA`가 아닌 `is.na()` 함수를 사용해야 합니다."
 },
 {
  "id": 99,
  "exam": "빅데이터분석기사",
  "topic": "R 실기 2유형",
  "q": "빅데이터분석기사 R 실기 제2유형 평가에서 범주형 예측 결과 파일을 생성하여 최종 제출할 때 주로 사용되는 데이터 저장 함수는?",
  "opts": [
   "write.csv(result, 'result.csv', row.names=FALSE)",
   "save.csv(result, 'result.csv')",
   "export.csv(result, 'result.csv')",
   "write.table(result, 'result.csv', sep=';')"
  ],
  "ans": 1,
  "exp": "실기 시험 제출 시 인덱스 열 생성을 방지하기 위해 `row.names=FALSE` 옵션으로 write.csv()를 호출합니다."
 },
 {
  "id": 100,
  "exam": "ADsP",
  "topic": "R 자격증 총평",
  "q": "ADsP 및 빅데이터분석기사 자격증의 R 과목 대비를 위한 가장 효과적인 학습 전략으로 가장 적절한 것은?",
  "opts": [
   "R의 기본 데이터 구조(Vector, Data Frame)와 apply/dplyr 주요 함수의 동작 원리 및 출력 형태를 숙지한다.",
   "R 대신 Python 명령문만 집중 암기한다.",
   "R 코드 문제 출제 비율이 적으므로 완전히 포기한다.",
   "R 패키지 소스 코드를 모두 외운다."
  ],
  "ans": 1,
  "exp": "기초 자료구조, 전처리 함수(dplyr), 통계/머신러닝 함수의 입력 및 출력 결과 해석 능력이 핵심 합격 요소입니다."
 }
];
