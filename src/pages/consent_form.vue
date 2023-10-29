<template>
  <main class="consent-form-main">
    <div class="jumbotron">
      <h3>Consent Form</h3>
    </div>
    <section class="mt-8">
      <div v-if="participating">
        <div class="consent-form-pdf px-12 py-6 sm:py-[40px] sm:px-[80px] ">
          <div class="top-section">
            <img src="../assets/app_icons/consent-form-logo.png" alt="University of Detroit Mercy Logo"
              style="width: 250px" />
            <h4 style="text-align: left; width: 300px">
              Child Development Lab, Reno 218, <br />
              Department of Psychology <br />
              University of Detroit Mercy 4001 W McNichols Rd, Detroit, MI 48221
              <br />
              Telephone: 313-578-0455 <br />
              Email: ChildDevelopmentLab@udmercy.edu
            </h4>
          </div>
          <br />
          <h4>
            Dear Parent/Legal Guardian, You and your child are invited to
            participate in a study on children's intergroup attitudes that is
            being conducted by the Child Development Lab at the University of
            Detroit Mercy. Please read the information below and ask questions
            about anything you do not understand before deciding if you would
            like to allow your child to participate. Why is my child being
            invited to take part in a research study? We invite your child to
            participate in our research because we want to understand how
            children think about people of the same social group as ourselves
            and towards people in other social groups.
          </h4>
          <h4>
            What should I know about the research study? The study takes about 1
            hour to complete. We will be playing games, reading stories, and
            asking questions about your child's preferences to look at their
            attitudes towards others. A researcher will guide your child through
            several computerized tasks using a tablet. In one task, students
            will be asked to view pictures of Black people and White people, and
            touch either smile logo or frown logo per instructions. In another
            task, students will listen to several scenarios and be asked to make
            a choice. The scenarios are all happened in students' daily life.
            Additionally, your child will play a game that teaches them how to
            recognize individuals from different race groups. While your child
            is completing the tasks, you will be asked to fill out a demographic
            questionnaire. Additionally, we will also ask you about your child's
            experiences with groups of people.
          </h4>
          <h4>
            Is there any way being in this study could be bad for my child? We
            don't believe there are any risks for your child from participating
            in this research. Participation in the study is completely
            voluntary. If you decide not to allow your child to participate,
            your decision will have no negative consequences for you or for your
            child. Your child may withdraw from the session at any time for any
            reason without loss of any compensation.
          </h4>
          <h4>
            Will being in this study help my child in any way? There are no
            benefits to your child from taking part in the research. However,
            upon completion, your child will get a toy and a competition
            certificate. Your participation will also add to our understanding
            of how children think about social groups, like race, gender, age.
            If my child takes part in this research, how will their privacy be
            protected? What happens to the information you collect? The
            information gathered for the study is confidential, except as
            required by law, and is secured at the University of Detroit Mercy.
            All gathered information will be combined with data collected from
            other participants, and only group norms will be reported. Please
            feel free to call Dr. Miao Qian at (617) 909-4761 if you have any
            questions about the study. Thank you for your interest in this
            project.
          </h4>
          <br />
          <h4>
            Sincerely, <br />
            Dr. Miao Qian Director of Child Development Lab <br />
            University of Detroit Mercy <br />
            Phone: 617-909-4761 <br />
            qianmi@udmercy.edu
          </h4>
        </div>
        <br />
        <div class="arrange-btns">
          <btn class="disagreement" routeTo="/consent-form" @click="participating = false">No, I do not agree to
            participate</btn>
          <btn class="agreement" routeTo="/Home">Yes, I agree to participate</btn>
        </div>
      </div>
      <div v-else>
        <h4>You can close out of this page</h4>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import btn from "../components/Buttons/MainButton.vue";
let participating = ref(true);
</script>

<style scoped>
.consent-form-main {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.consent-form-pdf {
  max-width: 750px;
  width: auto;
  box-sizing: border-box;
  box-shadow: 0 0 2px #d3d3d3;
  border: solid 1px #e5e5e5;
}

.jumbotron {
  background: linear-gradient(144deg, #4bac32, #389820);
  width: auto;
  padding: 12px 52px;
  border-radius: 1px;
  color: white;
  box-shadow: 0px 0px 4px lightgray;
  margin-top: 45px;
}

.jumbotron h3 {
  font-size: 16px;
  margin: 4px;
  font-weight: 300;
}

.top-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

}

.consent-form-image {
  max-width: 665px;
  box-shadow: 0px 0px 4px lightgrey;
  padding: 28px 6px;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 0px;
  max-height: 1011px;
  height: 100%;
}

h4 {
  text-align: left;
  font-size: 14px;
  line-height: 29px;
  width: auto;
}

.consent {
  width: auto;
  min-height: 618px;
  height: 92vh;
  max-width: 668px;
  padding: 47px 48px;
  background: white;
  overflow: auto;
  font-size: 14px;
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
  font-weight: 300;
  height: 26px;
}

.arrange-btns {
  display: flex;
  justify-content: center;
  column-gap: 30px;
  flex-wrap: wrap;
}
</style>
