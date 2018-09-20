import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-starting-out',
  template:
      `    
    <div class="starting-out_text-section">
      <div class="starting-out_title">
        Starting out with Magic the Gathering.
      </div>
      <div class="starting-out_information-section">
        <div class="starting-out_intro">
          <div class="starting-out_what-is-magic-title">What is Magic the Gathering?</div>
          
          <div class="starting-out_what-is-magic">
            Magic the Gathering is an expansive
            trading card game developed by Wizards of the Coast and has been growing ever more popular since
            it's origin in 1993. The idea of the game is that you are a Planeswalker, an every day person
            that can teleport to other planes of reality....no big deal right? All of these planes reside
            in what is called The Multiverse. Basically just imagine if people lived in all of the planets
            of our solar system and YOU could teleport between planets. Well that's pretty
            cool, what else is special about a Planeswalker? Planeswalkers can also harness the Mana, or energy, created by and
            surrounding the plane and with this mana they can do all kinds of things like raise the dead,
            cast spells to protect themselves, control the land, and even be physically invincible.
          </div>
        </div>
        <div class="starting-out_spells">
          Spells: Spells are basically every card in the game that is not a land. Spells consist of 5 major types
          creatures, enchantments, artifacts, instants and sorceries.
        </div>
        <div class="starting-out_mana">
          Mana: Mana is what you use to cast your spells. If you don't have mana you cannot cast your
          spells which makes mana extremely important when playing the game. There are five different
          colors of mana and; therefore, five different colors of spells in Magic.

          Let's go over each color and their roles in the multiverse.
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./starting-out.component.css']
})
export class StartingOutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
