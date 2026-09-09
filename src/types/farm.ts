export type UserRole =
  | "farmer"
  | "farm_manager"
  | "worker"
  | "buyer"
  | "seller"
  | "admin";

export type FarmStatus = "active" | "inactive";

export type CropStatus =
  | "planned"
  | "planted"
  | "growing"
  | "harvested";

export type TaskStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "cancelled";

export type Farm = {
  id: string;
  name: string;
  location: string;
  size: number;
  sizeUnit: "hectares" | "acres";
  status: FarmStatus;
};

export type Field = {
  id: string;
  farmId: string;
  name: string;
  size: number;
  sizeUnit: "hectares" | "acres";
};

export type Crop = {
  id: string;
  fieldId: string;
  name: string;
  variety?: string;
  status: CropStatus;
  plantingDate?: string;
  expectedHarvestDate?: string;
};

export type FarmTask = {
  id: string;
  farmId: string;
  title: string;
  status: TaskStatus;
  dueDate?: string;
  assignedTo?: string;
};
