import { defineStore } from 'pinia'
import { setTransitionHooks, toHandlers } from 'vue';

export const useGlyphsStore = defineStore({
  id: 'glyphLetters',
  state: () => ({
      name: '',
      glyphs: '',
      type: ''
  }),
  getters: {
    lowercaseName: (state) => state.name.toLocaleLowerCase()
  },
  actions: {
    generateGlyphs() {
      this.glyphs = "";
      let name = this.lowercaseName;
      for(let l=0; l<name.length; l++){
        let part7 = name.substring(l, (l+7));
        let part6 = name.substring(l, (l+6));
        let part5 = name.substring(l, (l+5));
        let part4 = name.substring(l, (l+4));
        let part3 = name.substring(l, (l+3));
        let part2 = name.substring(l, (l+2));
        let part1 = name.substring(l, (l+1));
        if((part7 === 'khepesh')){
          this.glyphs += '𓄘';
          l += 6;
        }
        else if((part7 === 'khepesh')){
          this.glyphs += '𓌛';
          l += 6;
        }
        else if(part6 === 'seshen'){
          this.glyphs += '𓆸'
          l += 5;
        }
        else if(part6 === 'kheper'){
          this.glyphs += '𓆣'
          l += 5;
        }
        else if(part6 === 'necher'){
          this.glyphs += '𓊹'
          l += 5;
        }
        else if(part6 === 'tekhen'){
          this.glyphs += '𓉶'
          l += 5;
        }
        else if(part6 === 'serekh'){
          this.glyphs += '𓊁'
          l +=5;
        }
        else if (part6 === 'khetem') {
          this.glyphs += '𓋩'
          l += 5;
        }
        else if (part6 === 'sekhem') {
          this.glyphs += '𓌂'
          l += 5
        }
        else if(part6 === 'shesep'){
          this.glyphs += '𓊏'
          l += 5
        }
        else if(part5 === 'sheno'){
          this.glyphs += '𓍷';
          l += 4;
        }
        else if(part5 === 'gereh'){
          this.glyphs += '𓇰'
          l += 4;
        }
        else if(part5 === 'akhet'){
          this.glyphs += '𓈌'
          l += 4;
        }
        else if(part5 === 'nefer'){
          this.glyphs += '𓄤'
          l += 4;
        }
        else if(part5 === 'hotep'){
          this.glyphs += '𓊵';
          l += 4;
        }
        else if(part5 === 'khroo'){
          this.glyphs += '𓊤';
          l += 4;
        }
        else if(part5 === 'depet'){
          this.glyphs += '𓊛'
          l += 4;
        }
        else if(part5 === 'weres'){
          this.glyphs += '𓊫'
          l += 4
        }
        else if(part5 === 'hejed'){
          this.glyphs += '𓋑'
          l += 4
        }
        else if(part5 === 'setep'){
          this.glyphs += '𓍉'
          l += 4
        }
        else if (part5 === 'khent') {
          this.glyphs += '𓏃'
          l += 4
        }
        else if (part5 === 'hemet') {
          this.glyphs += '𓈞'
          l += 4
        }
        else if(part4 === 'nejes'){
          this.glyphs += '𓅪';
          l += 3;
        }
        else if(part4 === 'shno'){
          this.glyphs += '𓍷';
          l += 3;
        }
        else if((part4 === 'enso')||(part4 === 'ensw')){
          this.glyphs += '𓇓';
          l += 3;
        }
        else if(part4 === 'khaw'){
          this.glyphs += '𓆼';
          l += 3;
        }
        else if(part4 === 'ankh'){
          this.glyphs += '𓋹';
          l += 3;
        }
        else if((part4 === 'khai')||(part4 === 'khay')){
          this.glyphs += '𓈍';
          l += 3;
        }
        else if((part4 === 'chao')||(part4 === 'chaw')){
          this.glyphs += '𓊡'
          l += 3
        }
        else if((part4 === 'shwt')||(part4 === 'shot')){
          this.glyphs += "𓋻"
          l += 3
        }
        else if(part4 === 'irch'){
          this.glyphs += '𓏈'
          l += 3
        }
        else if (part4 === 'sesh') {
          this.glyphs += '𓏞'
          l += 3
        }
        else if (part4 === 'shes') {
          this.glyphs += '𓍱'
          l += 3
        }
        else if((part3 === 'iwa')||(part3 === 'ioa')){
          this.glyphs += '𓃒';
          l += 2;
        }
        else if((part3 === 'miw')||(part3 === 'mio')){
          this.glyphs += '𓃠';
          l +=2;
        }
        else if((part3 === 'osr')||(part3 === 'wsr')){
          this.glyphs += '𓄊';
          l +=2;
        }
        else if((part3 === 'bit')){
          this.glyphs += '𓆤';
          l += 2;
        }
        else if((part3 === 'nso')||(part3 === 'nsw')){
          this.glyphs += '𓇓';
          l += 2;
        }
        else if((part3 === 'waj')){
          this.glyphs += '𓇅';
          l += 2;
        }
        else if((part3 === 'iah')){
          this.glyphs += '𓇹';
          l += 2;
        }
        else if((part3 === 'dwa')||(part3 === 'doa')){
          this.glyphs += '𓇽';
          l += 2;
        }
        else if(part3 === 'nfr'){
          this.glyphs += '𓄤';
          l += 2;
        }
        else if((part3 ==='hot')||(part3 === 'hwt')){
          this.glyphs += '𓉗';
          l += 2;
        }
        else if(part3 === 'wab'){
          this.glyphs += '𓃂';
          l += 2;
        }
        else if (part3 === 'maa') {
          this.glyphs += '𓌶'
          l += 2          
        }
        else if((part3 === 'iwn')||(part3 === 'ion')){
          this.glyphs += '𓉺'
          l += 2
        }
        else if ((part3 === 'kar')||(part3 === 'car')) {
          this.glyphs += '𓉬'
          l += 2
        }
        else if(part3 === 'sha'){
          this.glyphs += '𓆷'
          l += 2
        }
        else if(part3 === 'pet'){
          this.glyphs += '𓇯'
          l += 2
        }
        else if(part3 === 'kha'){
          this.glyphs += '𓉹'
          l += 2
        }
        else if (part3 === 'seh') {
          this.glyphs += '𓉲'
          l += 2
        }
        else if(part3 === 'set'){
          this.glyphs += '𓊨'
          l += 2
        }
        else if (part3 === 'sen') {
          this.glyphs += '𓌢'
          l += 2
        }
        else if(part3 === 'neb'){
          this.glyphs += '𓎠'
          l += 2
        }
        else if(part2 === 'mer'){
          this.glyphs += '𓍋'
          l += 2
        }
        else if (part3 === 'heb') {
          this.glyphs += '𓎱'
          l += 2
        }
        else if(part3 === 'hes'){
          this.glyphs += '𓎲'
          l += 2
        }
        else if(part3 === 'heb'){
          this.glyphs += '𓎳'
          l += 2
        }
        else if(part3 === 'mer'){
          this.glyphs += '𓉴'
          l += 2
        }
        else if(part3 === 'dej'){
          this.glyphs += '𓊽'
          l += 2
        }
        else if (part3 === 'men') {
          this.glyphs += '𓏠'
          l += 2
        }
        else if (part3 === 'mes') {
          this.glyphs += '𓄟'
          l += 2
        }
        else if (part3 === 'geb') {
          this.glyphs += '𓅭'
          l += 2
        }
        else if (part3 === 'per') {
          this.glyphs += '𓉐'
          l += 2
        }
        else if (part3 === 'mer'){
          this.glyphs += '𓌻'
          l += 2
        }
        else if (part2 === 'him') {
          this.glyphs += '𓍛'
          l += 2
        }
        else if(part2 === 'mer'){
          this.glyphs += '𓉴'
          l += 1
        }
        else if(part2 === 'ka'){
          this.glyphs += '𓂓'
          l += 1
        }
        else if (part2 === 'ha') {
          this.glyphs += '𓇉'
          l += 1
        }
        else if (part2 === 'ii'){
          this.glyphs += '𓇍'
          l += 1
        }
        else if(part2 === 'ra'){
          this.glyphs += '𓇳'
          l += 1
        }
        else if (part2 === 'ta') {
          this.glyphs += '𓇾'
          l += 1
        }
        else if(part2 === 'mr'){
          this.glyphs += '𓉴'
          l += 1
        }
        else if(part2 === 'st'){
          this.glyphs += '𓊨'
          l += 1
        }
        else if (part2 === 'sn') {
          this.glyphs += '𓌢'
          l += 1
        }
        else if ((part2 === 'iw')||(part2 === 'io')) {
          this.glyphs += '𓂻'
          l += 1
        }
        else if((part2 === 'aw')||(part2 === 'aa')){
          this.glyphs += '𓉻'
          l += 1
        }
        else if(part2 === 'nb'){
          this.glyphs += '𓎠'
          l += 1
        }
        else if (part2 === 'hb') {
          this.glyphs += '𓎱'
          l += 1
        }
        else if((part2 === 'wr')||(part2 === 'or')){
          this.glyphs += '𓅨'
          l += 1
        }
        else if((part2 === 'wn')||(part2 === 'on')||(part3 === 'wn')){
          this.glyphs += '𓃹'
          l += 1
        }
        else if (part2 === 'ba') {
          this.glyphs += '𓅡'
          l += 1
        }
        else if (part2 === 'hm') {
          this.glyphs += '𓍛'
          l += 1
        }
        else if(part2 === 'mr'){
          this.glyphs += '𓍋'
          l += 1
        }
        else if(part2 === 'ja'){
          this.glyphs += '𓍑'
          l += 1
        }
        else if(part2 === 'wa'){
          this.glyphs += '𓍯'
          l += 1
        }
        else if (part2 === 'sa') {
          this.glyphs += '𓎃'
          l += 1
        }
        else if(part2 === 'hb'){
          this.glyphs += '𓎳'
          l += 1
        }
        else if(part2 === 'mr'){
          this.glyphs += '𓉴'
          l += 1
        }
        else if(part2 === 'dj'){
          this.glyphs += '𓊽'
          l += 1
        }
        else if (part2 === 'mi') {
          this.glyphs += '𓏇'
          l += 1
        }
        else if (part2 === 'mn') {
          this.glyphs += '𓏠'
          l += 1
        }
        else if (part2 === 'ms') {
          this.glyphs += '𓄟'
          l += 1
        }
        else if (part2 === 'pa') {
          this.glyphs += '𓅮'
          l += 1
        }
        else if((part2 === 'ir')||(part2 === 'er')){
          this.glyphs += '𓁹'
          l += 1
        }
        else if(part2 === 'di'){
          this.glyphs += '𓏙'
          l += 1
        }
        else if(part2 === 'sa'){
          this.glyphs += '𓅬'
          l += 1
        }
        else if (part2 === 'gb') {
          this.glyphs += '𓅭'
          l += 1
        }
        else if (part2 === 'pr') {
          this.glyphs += '𓉐'
          l += 1
        }
        else if (part2 === 'mr'){
          this.glyphs += '𓌻'
          l += 1
        }
        else if(part2 === 'kh'){
          this.glyphs += '𓐍'
          l += 1
        }
        else if (part2 === 'sh') {
          this.glyphs += '𓈜'
          l += 1
        }
        else if (part2 === 'ch') {
          this.glyphs += '𓍿'
          l += 1
        }
        else if((part1 === 'a')||(part1 === 'e')){
          this.glyphs += '𓄿'
        }
        else if (part1 === 'i') {
          this.glyphs += '𓇋'
        }
        else if(part1 === 'y'){
          this.glyphs += '𓇌'
        }
        else if((part1 === 'o')||(part1 === 'w')||(part1 === 'u')){
          this.glyphs += '𓅱'
        }
        else if(part1 === 'b'){
          this.glyphs += '𓃀'
        }
        else if(part1 === 'p'){
          this.glyphs += '𓊪'
        }
        else if((part1 === 'f')||(part1 === 'v')){
          this.glyphs += '𓆑'
        }
        else if(part1 === 'm'){
          this.glyphs += '𓅓'
        }
        else if(part1 === 'n'){
          this.glyphs += '𓈖'
        }
        else if((part1 === 'r')||(part1 === 'l')){
          this.glyphs += '𓂋'
        }
        else if(part1 === 'h'){
          this.glyphs += '𓉔'
        }
        else if(part1 === 'z'){
          this.glyphs += '𓊃'
        }
        else if((part1 === 's')||(part1 === 'c')){
          this.glyphs += '𓋴'
        }
        else if(part1 === 'q'){
          this.glyphs += '𓈎'
        }
        else if(part1 === 'k'){
          this.glyphs += '𓎡'
        }
        else if(part1 === 'g'){
          this.glyphs += '𓎼'
        }
        else if(part1 === 't'){
          this.glyphs += '𓏏'
        }
        else if(part1 === 'd'){
          this.glyphs += '𓂧'
        }
        else if(part1 === 'j'){
          this.glyphs += '𓆓'
        }
      }
      this.glyphs += this.type
    }
  }
})
