import { Button, Checkbox, Col, Row, Radio } from 'antd';
import { BaseComponent } from '../../00.common/00.components/BaseComponent';
import { ItemsPracticeExam } from './constParam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faClock } from '@fortawesome/free-solid-svg-icons';
import Countdown from 'react-countdown';
import styles from './Exam.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../00.common/const';
interface ExamProps {}
interface ExamState {
  autoStart: boolean;
}
type MyObject = {
  Title: string;
  ImgUrl: string;
  Des: string;
  Link: {
    Title: string;
    Link: string;
  }[];
  LinkPractice: string;
  LinkStudy: string;
  type: number;
};

let myArray: MyObject[] = [
  {
    Title: 'Phần 1',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_1.webp?alt=media&token=f812e629-d81a-4333-a9da-bb1d9f131f70',
    Des: 'MÔ TẢ HÌNH ẢNH',
    Link: [
      {
        Title: 'Luyện nghe Toeic Part 1',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 1',
        Link: '',
      },
    ],
    LinkPractice: ROUTER.lIST_EXAM_PART1,
    LinkStudy: ROUTER.PAR_PART1,
    type: 0,
  },
  {
    Title: 'Phần 2',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_2.webp?alt=media&token=8c2a1ddd-0562-40ce-9b29-14683f27cfc5',
    Des: 'HỎI - ĐÁP',
    Link: [
      {
        Title: 'Luyện nghe Toeic Part 2',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 2',
        Link: '',
      },
    ],
    LinkPractice: ROUTER.lIST_EXAM_PART2,
    LinkStudy: ROUTER.PAR_PART2,
    type: 0,
  },
  {
    Title: 'Phần 3',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_3.webp?alt=media&token=4ff366c2-5704-4211-aae1-8486419fa3ee',
    Des: 'ĐOẠN HỘI THOẠI',
    Link: [
      {
        Title: 'Luyện nghe Toeic Part 3',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 3',
        Link: '',
      },
    ],
    LinkPractice: ROUTER.lIST_EXAM_PART3,
    LinkStudy: ROUTER.PAR_PART3,
    type: 0,
  },

  {
    Title: 'Phần 4',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_4.webp?alt=media&token=d7768ba0-c746-4037-b3c1-8dd6c8c6dc1d',
    Des: 'BÀI NÓI CHUYỆN NGẮN',
    Link: [
      {
        Title: 'Luyện nghe Toeic Part 4',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 4',
        Link: '',
      },
    ],
    LinkPractice: ROUTER.lIST_EXAM_PART4,
    LinkStudy: ROUTER.PAR_PART4,
    type: 0,
  },
  {
    Title: 'Phần 5',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_4.webp?alt=media&token=d7768ba0-c746-4037-b3c1-8dd6c8c6dc1d',
    Des: 'CÂU KHÔNG HOÀN CHỈNH',
    Link: [
      {
        Title: 'Chiến lược làm phần 5 TOEIC',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 5',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 5 Từ loại',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 5 Ngữ pháp',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 5 Từ vựng',
        Link: '',
      },
    ],
    LinkPractice: ROUTER.lIST_EXAM_PART5,
    LinkStudy: ROUTER.PAR_PART5,
    type: 1,
  },
  {
    Title: 'Phần 6',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_6.webp?alt=media&token=6da3089c-6dd2-4579-9178-1e42c87078f2',
    Des: 'HOÀN THÀNH ĐOẠN VĂN',
    Link: [
      {
        Title: 'Chiến lược làm phần 6 TOEIC',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 6',
        Link: '',
      },
    ],
    LinkPractice: ROUTER.lIST_EXAM_PART6,
    LinkStudy: ROUTER.PAR_PART6,
    type: 1,
  },
  {
    Title: 'Phần 7',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_7.webp?alt=media&token=8259e2d4-0039-408a-864c-8c9a2430143f',
    Des: 'ĐOẠN ĐƠN',
    Link: [
      {
        Title: 'Chiến lược làm phần 7 TOEIC',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 7',
        Link: '',
      },
    ],
    LinkPractice: ROUTER.lIST_EXAM_PART7,
    LinkStudy: ROUTER.PAR_PART7,
    type: 1,
  },
  {
    Title: 'Phần 7',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_8.webp?alt=media&token=67225d90-94a1-44e7-83b8-f5cf87a2cd67',
    Des: 'ĐOẠN KÉP',
    Link: [],
    LinkPractice: ROUTER.lIST_EXAM_PART7,
    LinkStudy: ROUTER.PAR_PART7,
    type: 1,
  },
];

export class ExamListeningCop extends BaseComponent<ExamProps, ExamState> {
  public refCountdown = React.createRef<Countdown>();
  constructor(props: ExamProps) {
    super(props);
    this.state = {
      autoStart: false,
    };
  }
  handleClick(type) {
    let data = myArray.filter((item) => item.type == type);
    myArray = data;
    console.log('myArray:', myArray);
  }
  renderExamPractice() {
    return (
      <div style={{ width: '100%' }}>
        <Row gutter={32} style={{ marginTop: 30 }}>
          <Col span={8}>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[4].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <h3 className={styles.examPracticeItem__infor__title}>{myArray[4].Title}</h3>
                <div className={styles.examPracticeItem__infor__des}>{myArray[4].Des}</div>
                {['Chiến lược làm phần 5 TOEIC', 'Mẹo thi Toeic Part 5'].map((item) => (
                  <div className={styles.examPracticeItem__infor__a}>{item}</div>
                ))}

                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href={myArray[4].LinkPractice}
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện
                  </a>
                  <a
                    href={myArray[4].LinkStudy}
                    style={{ backgroundColor: '#999999' }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Học
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ marginTop: 30 }}>
          {myArray.slice(5, 8).map((item) => (
            <Col span={8}>
              <div className={styles.examPracticeItem}>
                <div className={styles.examPracticeItem__img}>
                  <img src={item.ImgUrl} />
                </div>
                <div className={styles.examPracticeItem__infor}>
                  <h3 className={styles.examPracticeItem__infor__title}>{item.Title}</h3>
                  <div className={styles.examPracticeItem__infor__des}>{item.Des}</div>
                  {item.Link.map((item) => (
                    <div className={styles.examPracticeItem__infor__a}>{item.Title}</div>
                  ))}

                  <div className={styles.examPracticeItem__infor__btns}>
                    <a
                      href={item.LinkPractice}
                      style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                      className={styles.examPracticeItem__infor__btns__button}
                    >
                      Luyện
                    </a>
                    <a
                      href={item.LinkStudy}
                      style={{ backgroundColor: '#999999' }}
                      className={styles.examPracticeItem__infor__btns__button}
                    >
                      Học
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
  renderAuditions() {}

  renderShortExam() {
    return (
      <div className={styles.examShortExam}>
        <div className={styles.examShortExam__calendar}>
          <span className={styles.examShortExam__calendar__year}>14</span>
          <span className={styles.examShortExam__calendar__month}>06</span>
          <span className={styles.examShortExam__calendar__date}>04</span>
        </div>
        <div className={styles.examShortExam__content}>
          <span className={styles.examShortExam__content__infor}>
            <FontAwesomeIcon icon={faPen} style={{ marginRight: 20 }} />
            51 câu
          </span>
          <span className={styles.examShortExam__content__inforTime}>
            {' '}
            <FontAwesomeIcon icon={faClock} style={{ marginRight: 20 }} />
            39 phút
          </span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container__header}>
          <div className={styles.container__header__item} style={{ backgroundColor: '#87C52E' }}>
            {' '}
            <Link to={ROUTER.PART_READING}>
              <a>LUYỆN PHẦN NGHE</a>
            </Link>{' '}
          </div>
          <div className={styles.container__header__item} style={{ backgroundColor: '#87C52E' }}>
            {' '}
            <Link to={ROUTER.PART_LISTENING}>
              <a>LUYỆN PHẦN ĐỌC</a>
            </Link>{' '}
          </div>
          <div className={styles.container__header__item} style={{ backgroundColor: '#87C52E' }}>
            {' '}
            <Link to={ROUTER.PRACTICE_EXAM}>
              <a>ĐỀ THI THỬ TOEIC</a>
            </Link>{' '}
          </div>
        </div>

        <div style={{ width: '100%', marginTop: 50 }}>
          {/* {this.renderExamPractice()} */}
          {this.renderExamPractice()}
        </div>
      </div>
    );
  }
}
