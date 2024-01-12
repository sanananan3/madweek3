// src/utils/markdownUtils.ts

export interface HeaderCounts {
    h1: number;
    h2: number;
    h3: number;
  }

export function countMarkdownHeaders(markdownText: string): HeaderCounts {
    const headerRegex = /^(#{1,3})\s/gm;
    let match;
  
    const counts = {
        h1: 0,
        h2: 0,
        h3: 0
    };
    
    // 정규 표현식을 사용하여 마크다운 텍스트를 반복적으로 검색
    while ((match = headerRegex.exec(markdownText)) !== null) {
    // '#'의 개수에 따라 카운트를 증가시킵니다.
        switch (match[1].length) {
            case 1:
                counts.h1 += 1;
                break;
            case 2:
                counts.h2 += 1;
                break;
            case 3:
                counts.h3 += 1;
                break;
            // 필요에 따라 더 많은 케이스를 추가할 수 있습니다.
        }
    }

    console.log(counts);
    
    return counts;
  }
