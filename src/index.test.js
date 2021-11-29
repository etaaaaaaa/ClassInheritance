import Character, {Swordsman, Magician, Undead, Zombie, Daemon} from "./index";
import Bowman from "./Bowman"

test('test ', () => {
    expect(new Bowman("Name", "Bowman")).toEqual({name: "Name", type: "Bowman", health:100, level:1, attack:25, defence:25});
  });

test('test ', () => {
    expect(new Swordsman("Name", "Swordsman")).toEqual({name: "Name", type: "Swordsman", health:100, level:1, attack:40, defence:10});
  });

test('test ', () => {
    expect(new Magician("Name", "Magician")).toEqual({name: "Name", type: "Magician", health:100, level:1, attack:10, defence:40});
  });

  test('test ', () => {
    expect(new Undead("Name", "Undead")).toEqual({name: "Name", type: "Undead", health:100, level:1, attack:25, defence:25});
  });
  
  test('test ', () => {
    expect(new Zombie("Name", "Zombie")).toEqual({name: "Name", type: "Zombie", health:100, level:1, attack:40, defence:10});
  });

  test('test ', () => {
    expect(new Daemon("Name", "Daemon")).toEqual({name: "Name", type: "Daemon", health:100, level:1, attack:10, defence:40});
  });


describe('Test Error:', () => {
        test('test ', () => {
            expect(() => new Character("Very_Long_Name_That_doesnt_make_sense", "Daemon")).toThrow(Error);
         });
 });

 describe('Test Error:', () => {
    test('test ', () => {
        expect(() => new Character("Name", "Name")).toThrow(Error);
     });
});