<template>
  <main>
    <div class="jumbotron">
      <h3>Consent Form</h3>
    </div>
    <br />
    <section>
      <div v-if="participating">
        <h4 class="consent">
          Thank you for participating in our study!
          <br /><br />
          <b>Key Information</b>
          <br /><br />
          The following is a short summary of this study to help you decide
          whether or not to be a part of this study. If you choose to
          participate in this study, you will be asked to complete an Implicit
          Association Test (IAT) in which you will pair words representing son
          and daughter with words representing the categories “Good” and “Bad”,
          and the categories “Money” and “Love”.

          <br /><br />
          <b> Why is this research being done?</b>
          <br /><br />
          To understand the association between different social groups (e.g.,
          son and daughter) and the categories of “good” or “bad” and “money” or
          “love” using the Implicit Association Test (IAT; Greenwald, McGhee,
          and Schwartz, 1998).

          <br /><br />
          <b> How long will the research last and what will I need to do?</b>
          <br /><br />

          We expect that you will be in this research study for 12-14 minutes.
          You will be asked to answer questions and to complete two Implicit
          Association Tests (IATs) in which you will pair words representing son
          and daughter with words representing the categories “Good” and “Bad”,
          and the categories “Money” and “Love”.

          <br /><br />
          <b>Will being in this study help me in any way? </b>
          <br /><br />

          There are no benefits to you from your taking part in this research,
          and we cannot promise any benefits to others from your taking part in
          this research. However, possible benefits to others include
          understanding your own implicit associations. Given the civil unrest
          in our country, this test may provide you with data that will make you
          think about how much or how little you personally are influenced by
          your society.

          <br /><br />
          <b>Data Collection and Privacy </b>
          <br /><br />

          During the session, your response will be automatically recorded. Data
          is stored securely on local servers. Personal information will be
          treated in compliance with data protection laws.

          <br /><br />
          <b>Use of Data by Study Researchers</b>
          <br /><br />

          Your data may be placed in publicly accessible data repositories in a
          completely anonymized form. Your data may also be used to publish
          summaries of the study results in academic journals or at educational
          meetings. You will not be directly identified in any publication or
          report of the study.

          <br /><br />
          <b>Rights of Research Subjects</b>
          <br /><br />

          Please contact the Committee on the Use of Human Subjects in Research
          at Harvard University, if you have any questions, concerns,
          suggestions, or complaints that have not been or cannot be addressed
          by the researcher, or want to report research-related harm.They can be
          reached at: 617-496-2847, 44-R Brattle St, Suite 200, Cambridge, MA
          02138. The committee's email is cuhs@fas.harvard.edu.

          <br /><br />
          <b>Researcher Contact Information</b>
          <br /><br />

          If you have any questions or concerns about this study, please contact
          research lead Miao Qian at miao_qian@fas.harvard.edu, or the faculty
          supervisor Mahzarin Banaji at mahzarin_banaji@harvard.edu. Feel free
          take a photo or a screenshot of the contact information, in case you
          would like to contact us with any questions or concerns.

          <br />
          Please double click below if you agree to participate in this study.
        </h4>
        <br />
        <div class="arrange-btns">
          <btn
            class="disagreement"
            whereTo="/consent-form"
            @click="participating = false"
            >No, I do not agree to participate</btn
          >
          <btn class="agreement" whereTo="/Home"
            >Yes, I agree to participate</btn
          >
        </div>
      </div>
      <div v-else>
        <h4>You can close out of this page</h4>
      </div>
    </section>
  </main>
</template>

<script>
import btn from "../components/Jelly_Button.vue";
export default {
  components: {
    btn,
  },

  data() {
    return {
      participating: true,
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto !important;
}

.jumbotron {
  background: linear-gradient(45deg, #3e9c3e, #32976d);
  width: 263px;
  border-radius: 1px;
  color: white;
  box-shadow: 0px 0px 4px lightgray;
    margin-top: 45px

}

.jumbotron h3 {
  font-size: 16px;
    font-weight: 300;
}

.consent {
  width: auto;
  height: 618px;
  max-width: 668px;
  padding: 47px 48px;
  overflow: auto;
  line-height: 35px;
  box-sizing: border-box;
  border: solid 1px #e5e5e5;
  font-weight: 300;
  border-radius: 3px;
  box-shadow: 0px 0px 2px lightgrey;
}

.agreement,
.disagreement {
  width: 190px;
  /* margin-top: 30px; */
  font-weight: 300;
  height: 47px;
}

.arrange-btns {
  display: flex;
  justify-content: center;
  column-gap: 30px;
  flex-wrap: wrap;
}
</style>