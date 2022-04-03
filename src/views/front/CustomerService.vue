<template>
  <div class="container">
    <div class="main text-secondary">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h2 class="py-8 text-center">常見問題</h2>
          <!-- 產品問題 -->
          <div class="product card px-12 py-8 mb-8">
            <h3 class="mb-6 bg-primary text-light p-4 text-center fs-4">
              產品問題
            </h3>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#productCollapseOne"
                    aria-expanded="true"
                    aria-controls="productCollapseOne"
                  >
                    ＃產品服務
                  </button>
                </h2>
                <div
                  id="productCollapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>好好生活 Hoholiving </strong
                    >提供您各式各樣日常生活需求的居家用品，例如客廳的沙發、廚房的廚具到臥室的床...還有居家佈置的抱枕、蠟燭等家飾品。歡迎點選
                    <router-link class="text-decoration-none" to="/products"
                      >這裡</router-link
                    >
                    看看我們所為您精心挑選的國、內外家居設計精品。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#productCollapseTwo"
                    aria-expanded="false"
                    aria-controls="productCollapseTwo"
                  >
                    ＃產品品質
                  </button>
                </h2>
                <div
                  id="productCollapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>好好生活 Hoholiving </strong
                    >所有的產品皆經過嚴格的國際品質標準和規範審核，多年來也陸續調查消費者的實際生活情境，並藉由調查報告結果進行嚴格的商品測試，目的在於提供廣大消費群眾更多好設計、好品質的商品，以確保消費者得到最高的商品品質。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#productCollapseThree"
                    aria-expanded="false"
                    aria-controls="productCollapseThree"
                  >
                    ＃產品保固
                  </button>
                </h2>
                <div
                  id="productCollapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>好好生活 Hoholiving </strong
                    >所提供的每項商品皆有品質保證。可以透過查詢保證卡上所標示的商品編號，查詢商品保固期限，而保固期限自購買日期起生效。當原始購買人轉售或轉讓該產品時，即為保固期限的終止期。若您手上的傢俱為二手轉售取得，則需要出示原始購買憑證，保固服務方可生效，故請妥善保存購買證明以利享有品質保證服務。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 線上購物 -->
          <div class="product card px-12 py-8 mb-8">
            <h3 class="mb-6 bg-primary text-light p-4 text-center fs-4">
              線上購物
            </h3>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#shoppingCollapseOne"
                    aria-expanded="true"
                    aria-controls="shoppingCollapseOne"
                  >
                    ＃網站註冊及登入
                  </button>
                </h2>
                <div
                  id="shoppingCollapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    請至<strong> 好好生活 Hoholiving </strong>官網的「註冊 /
                    登入」頁面，點選 icon，並跟著頁面提示申請成為<strong>
                      好好生活 Hoholiving </strong
                    >會員，始可開始在官網線上購物。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#shoppingCollapseTwo"
                    aria-expanded="false"
                    aria-controls="shoppingCollapseTwo"
                  >
                    ＃選購流程
                  </button>
                </h2>
                <div
                  id="shoppingCollapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul class="list-unstyled mt-6">
                      <li class="mb-2">1. 將商品放入購物車</li>
                      <li class="mb-2">
                        2. 點選畫面中右上方購物車圖示，查詢購物清單
                      </li>
                      <li class="mb-2">3. 修改商品數量</li>
                      <li class="mb-2">4. 填寫、確認收件資訊</li>
                      <li class="mb-2">5. 完成結帳</li>
                      <li class="mb-2">6. 依您所選擇的取貨方式收貨</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#shoppingCollapseThree"
                    aria-expanded="false"
                    aria-controls="shoppingCollapseThree"
                  >
                    ＃優惠代碼
                  </button>
                </h2>
                <div
                  id="shoppingCollapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li class="mb-2">
                        相同的優惠碼，每組會員帳號僅能使用一次
                      </li>
                      <li class="mb-2">優惠碼的使用名額有限</li>
                      <li class="mb-2">優惠碼使用期限已截止，將不可再使用</li>
                      <li class="mb-2">
                        購物車內的商品不可套用優惠券時，優惠碼亦無效
                      </li>
                      <li class="mb-2">記名的優惠碼限特定會員帳號使用</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#shoppingCollapseFour"
                    aria-expanded="false"
                    aria-controls="shoppingCollapseFour"
                  >
                    ＃如何退換貨
                  </button>
                </h2>
                <div
                  id="shoppingCollapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li class="mb-2">
                        <strong>關於退貨：</strong
                        >依照消費者保護法規定：為維護消費者權益，線上購物的消費者均享有商品到貨七天內猶豫期的服務。若您對於在<strong>
                          好好生活 Hoholiving </strong
                        >購買的產品不滿意，在符合退換貨權益的情況下，您可在 365
                        天內至「聯絡我們」申請商品退換貨，我們會請物流於五個工作天內前往您指定的地點收回與交付換貨商品。
                      </li>
                      <li class="mb-2">
                        <strong>關於退款：</strong
                        >發票確認作廢及商品回收經確認為完整狀態後七個工作天內，以退刷或匯款（限使用ATM匯款之訂單）至您的帳戶。
                      </li>
                      <li class="mb-2">
                        <strong>關於發票：</strong>
                        因退貨訂單而開立之電子發票將由<strong>
                          好好生活 Hoholiving </strong
                        >主動於系統作廢，同時亦將不再另行告知，紙本發票（含三聯式發票）請依<strong>
                          好好生活 Hoholiving </strong
                        >客服指示，寄回指定地址進行作廢。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 其他 -->
          <div class="product card px-12 py-8 mb-8">
            <h3 class="mb-6 bg-primary text-light p-4 text-center fs-4">
              其他
            </h3>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#otherCollapseOne"
                    aria-expanded="true"
                    aria-controls="otherCollapseOne"
                  >
                    ＃組裝服務
                  </button>
                </h2>
                <div
                  id="otherCollapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    您在<strong> 好好生活 Hoholiving </strong
                    >所購置的大部份的商品皆為平整包裝，您可在商品頁面透過查詢商品規格，確認包裝的尺寸大小、重量等相關資訊，並確認是符合您家中規格所使用的家具，同時亦有提供專業的運送服務，我們會有專業的組裝師傅到府服務。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#otherCollapseTwo"
                    aria-expanded="false"
                    aria-controls="otherCollapseTwo"
                  >
                    ＃會員紅利點數
                  </button>
                </h2>
                <div
                  id="otherCollapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    若您為<strong> 好好生活 Hoholiving </strong
                    >的網路會員，每消費 500 元即可累積 1
                    點，累積之點數可於下一次在網站購物時，折抵消費金額
                    (折抵點數方法以網站公告規則為主)。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#otherCollapseThree"
                    aria-expanded="false"
                    aria-controls="otherCollapseThree"
                  >
                    ＃好好生活年度家具型錄
                  </button>
                </h2>
                <div
                  id="otherCollapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    深受大家喜愛的<strong>
                      好好生活 hoholiving 年度家具型錄 </strong
                    >自 2021
                    年秋季起停刊，主要是考量到媒體消費和顧客行為已發生變化，因此我們將轉仰賴數位平台，提供顧客更多居家佈置靈感。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
