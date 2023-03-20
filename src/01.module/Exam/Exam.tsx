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
        Title: 'Luyện nghe Toeic Part 1,',
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
        Title: 'Luyện nghe Toeic Part 2,',
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
        Title: 'Luyện nghe Toeic Part 3,',
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
        Title: 'Luyện nghe Toeic Part 4,',
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
        Title: 'Chiến lược làm phần 5 TOEIC,',
        Link: '',
      },
      {
        Title: 'Mẹo thi Toeic Part 5',
        Link: '',
      },
      // {
      //   Title: 'Mẹo thi Toeic Part 5 Từ loại',
      //   Link: '',
      // },
      // {
      //   Title: 'Mẹo thi Toeic Part 5 Ngữ pháp',
      //   Link: '',
      // },
      // {
      //   Title: 'Mẹo thi Toeic Part 5 Từ vựng',
      //   Link: '',
      // },
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
        Title: 'Chiến lược làm phần 6 TOEIC,',
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
    Title: 'Phần 7.1',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_7.webp?alt=media&token=8259e2d4-0039-408a-864c-8c9a2430143f',
    Des: 'ĐOẠN ĐƠN',
    Link: [
      {
        Title: 'Chiến lược làm phần 7 TOEIC,',
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
    Title: 'Phần 7.2',
    ImgUrl:
      'https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FExam%2FPart1%2Fde_luyen_tap_phan_8.webp?alt=media&token=67225d90-94a1-44e7-83b8-f5cf87a2cd67',
    Des: 'ĐOẠN KÉP',
    Link: [
      {
        Title: 'Chiến lược làm phần 7 TOEIC,',
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
];

export class ExamComp extends BaseComponent<ExamProps, ExamState> {
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.container__header__item} style={{ backgroundColor: '#87C52E' }}>
            {' '}
            <a>LUYỆN PHẦN NGHE</a>
          </div>
        </div>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          {myArray.slice(0, 4).map((item) => (
            <Col /*span={8}*/ className={styles.practice__listening}>
              <div className={styles.examPracticeItem}>
                <div className={styles.examPracticeItem__img}>
                  <img src={item.ImgUrl} />
                </div>
                <div className={styles.examPracticeItem__infor}>
                  <div style={{ width: '180px' }}>
                    <h3 className={styles.examPracticeItem__infor__title}>{item.Title}</h3>
                    <div className={styles.examPracticeItem__infor__des}>{item.Des}</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    {item.Link.map((item) => (
                      <div className={styles.examPracticeItem__infor__a}>{item.Title}</div>
                    ))}
                  </div>

                  <div className={styles.examPracticeItem__infor__btns}>
                    <Link to={item.LinkPractice}>
                      {' '}
                      <a
                        href={item.LinkPractice}
                        style={{ backgroundColor: '#FFBA00', marginRight: 10 }}
                        className={styles.examPracticeItem__infor__btns__button}
                      >
                        Luyện
                      </a>
                    </Link>
                    <Link to={item.LinkStudy}>
                      <a
                        href={item.LinkStudy}
                        style={{ backgroundColor: '#999999' }}
                        className={styles.examPracticeItem__infor__btns__button}
                      >
                        Học
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <div className={styles.container__header__item} style={{ backgroundColor: '#87C52E' }}>
            {' '}
            <a>LUYỆN PHẦN ĐỌC</a>
          </div>
        </div>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          {/* <Col span={8}>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[3].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <h3 className={styles.examPracticeItem__infor__title}>{myArray[3].Title}</h3>
                <div className={styles.examPracticeItem__infor__des}>{myArray[3].Des}</div>
                {myArray[3].Link.map((item) => (
                  <div className={styles.examPracticeItem__infor__a}>{item.Title}</div>
                ))}

                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href={myArray[3].LinkPractice}
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện
                  </a>
                  <a
                    href={myArray[3].LinkStudy}
                    style={{ backgroundColor: '#999999' }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Học
                  </a>
                </div>
              </div>
            </div>
          </Col> */}

          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[4].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title}>{myArray[4].Title}</h3>
                  <div className={styles.examPracticeItem__infor__des}>{myArray[4].Des}</div>
                </div>
                <div style={{ display: 'flex' }}>
                  {myArray[4].Link.map((item) => (
                    <div className={styles.examPracticeItem__infor__a}>{item.Title}</div>
                  ))}
                </div>

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
              {/* <div
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingLeft: 50,
                }}
              >
                <div>
                  <Checkbox style={{ marginRight: 5 }} /> <span>Từ Loại</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <Checkbox style={{ marginBottom: 30, marginRight: 5 }} />
                    <span>Từ Vựng</span>
                  </div>
                  <div>
                    <Checkbox style={{ marginRight: 5 }} />
                    <span>Tổng hợp</span>
                  </div>
                </div>
                <div>
                  <Checkbox style={{ marginRight: 5 }} />
                  <span>Từ Vựng</span>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          {myArray.slice(5, 8).map((item) => (
            <Col>
              <div className={styles.examPracticeItem}>
                <div className={styles.examPracticeItem__img}>
                  <img src={item.ImgUrl} />
                </div>
                <div className={styles.examPracticeItem__infor}>
                  <div style={{ width: '180px' }}>
                    <h3 className={styles.examPracticeItem__infor__title}>{item.Title}</h3>
                    <div className={styles.examPracticeItem__infor__des}>{item.Des}</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    {item.Link.map((item) => (
                      <div className={styles.examPracticeItem__infor__a}>{item.Title}</div>
                    ))}
                  </div>

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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <div className={styles.container__header__item} style={{ backgroundColor: '#87C52E' }}>
            {' '}
            <a>ĐỀ THI THỬ TOEIC</a>
          </div>
        </div>
      </div>
    );
  }
  renderAuditions() {}

  renderShortExam() {
    return (
      // <div className={styles.examShortExam}>
      //   <div>Đề thi thử số 1</div>
      //   <div className={styles.examShortExam__calendar}>
      //     <span className={styles.examShortExam__calendar__year}>14</span>
      //     <span className={styles.examShortExam__calendar__month}>06</span>
      //     <span className={styles.examShortExam__calendar__date}>04</span>
      //   </div>
      //   <div className={styles.examShortExam__content}>
      //     <span className={styles.examShortExam__content__infor}>
      //       <FontAwesomeIcon icon={faPen} style={{ marginRight: 20 }} />
      //       51 câu
      //     </span>
      //     <span className={styles.examShortExam__content__inforTime}>
      //       {' '}
      //       <FontAwesomeIcon icon={faClock} style={{ marginRight: 20 }} />
      //       39 phút
      //     </span>
      //   </div>
      // </div>
      <div>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-1-62b69492bbc57b27fe10f7ac/" target="_blank">
                      Đề thi thử số 1
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-1-62b69492bbc57b27fe10f7ac/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-2-62b6b89bbbc57b27fe10fc20/" target="_blank">
                      Đề thi thử số 2
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-2-62b6b89bbbc57b27fe10fc20/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-3-62b6be4fbbc57b27fe10fee2/" target="_blank">
                      Đề thi thử số 3
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-3-62b6be4fbbc57b27fe10fee2/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-4-62b6ca67bbc57b27fe110447/" target="_blank">
                      Đề thi thử số 4
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-4-62b6ca67bbc57b27fe110447/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-5-62b6cf2fbbc57b27fe110747/" target="_blank">
                      Đề thi thử số 5
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-5-62b6cf2fbbc57b27fe110747/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-6-62b92adbbbc57b27fe11b13a/" target="_blank">
                      Đề thi thử số 6
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-6-62b92adbbbc57b27fe11b13a/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-7-62b930b5bbc57b27fe11b3a1/" target="_blank">
                      Đề thi thử số 7
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-7-62b930b5bbc57b27fe11b3a1/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-8-62b95664bbc57b27fe11bf38/" target="_blank">
                      Đề thi thử số 8
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-8-62b95664bbc57b27fe11bf38/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-9-62b95ff0bbc57b27fe11c521/" target="_blank">
                      Đề thi thử số 9
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-9-62b95ff0bbc57b27fe11c521/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={32} style={{ flexDirection: 'column' }}>
          <Col>
            <div className={styles.examPracticeItem}>
              <div className={styles.examPracticeItem__img}>
                <img src={myArray[5].ImgUrl} />
              </div>
              <div className={styles.examPracticeItem__infor}>
                <div style={{ width: '180px' }}>
                  <h3 className={styles.examPracticeItem__infor__title} style={{ width: '180px' }}>
                    <a href="https://toeic-testpro.com/study/test/test-10-62b97492bbc57b27fe11d166/" target="_blank">
                      Đề thi thử số 10
                    </a>
                  </h3>
                </div>
                <div className={styles.examPracticeItem__infor__btns}>
                  <a
                    href="https://toeic-testpro.com/study/test/test-10-62b97492bbc57b27fe11d166/"
                    target="_blank"
                    style={{ backgroundColor: '#e9ab17', marginRight: 10 }}
                    className={styles.examPracticeItem__infor__btns__button}
                  >
                    Luyện thi
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <div className={styles.container__header}>
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
        </div> */}

        <div style={{ width: '100%' }}>
          {/* {this.renderExamPractice()} */}
          {this.renderExamPractice()}
          {this.renderShortExam()}
        </div>
      </div>
    );
  }
}
