import {
  collection,
  db,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "@/firebase/firestore";
import { IRepository } from "./IRepository";

export class FirebaseRepository<T> implements IRepository<T> {
  private collectionRef;

  constructor(
    private collectionName: string,
    private fromFirestore: (id: string, data: any) => T
  ) {
    this.collectionRef = collection(db, collectionName);
  }

  async findAll(): Promise<T[]> {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map((doc: any) =>
      this.fromFirestore(doc.id, doc.data())
    );
  }

  async findById(id: string): Promise<T | null> {
    const docRef = doc(this.collectionRef, id);
    const snapshot = await getDoc(docRef);
    return snapshot.exists()
      ? this.fromFirestore(snapshot.id, snapshot.data())
      : null;
  }

  async save(entity: T & { id: string }): Promise<void> {
    const docRef = doc(this.collectionRef, entity.id);
    await setDoc(docRef, { ...entity });
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.collectionRef, id);
    await deleteDoc(docRef);
  }
}
